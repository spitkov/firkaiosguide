import type { PageServerLoad } from './$types';

let cachedData: any = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000;

async function getESignApps() {
  const currentTime = Date.now();
  if (cachedData && currentTime - lastFetchTime < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const response = await fetch("https://khoindvn.io.vn/app.js");
    if (!response.ok) {
      throw new Error(`Failed to fetch app.js: ${response.statusText}`);
    }
    const jsContent = await response.text();

    const regex = /const esignApps = (.*?);/s;
    const match = jsContent.match(regex);
    if (!match || !match[1]) {
      throw new Error("Could not find esignApps array in the script.");
    }

    const appsArray = new Function(`return ${match[1]}`)();

    const filteredApps = appsArray.filter(
      (app: any) => !app.name.includes("✅")
    );

    const processedApps = await Promise.all(
      filteredApps.map(async (app: any) => {
        try {
          const appPageResponse = await fetch(app.url);
          if (!appPageResponse.ok) return null;
          const appPageContent = await appPageResponse.text();

          const keyRegex = /aKey\s*=\s*'([^']*)'/;
          const keyMatch = appPageContent.match(keyRegex);

          if (keyMatch && keyMatch[1]) {
            const aKey = keyMatch[1];
            return {
              name: app.name,
              descriptions: app.descriptions,
              installUrl: `http://loadly.io/app/install/${aKey}`,
            };
          }
          return null;
        } catch (error) {
          console.error(`Failed to process app ${app.name}:`, error);
          return null;
        }
      })
    );

    const finalApps = processedApps.filter((app) => app !== null);

    cachedData = finalApps;
    lastFetchTime = currentTime;

    return finalApps;
  } catch (error) {
    console.error("Error fetching or processing e-sign apps:", error);
    if (cachedData) return cachedData;
    throw error;
  }
}

export const load: PageServerLoad = async () => {
    try {
        const apps = await getESignApps();
        return { apps };
    } catch (error) {
        console.error('Error loading apps:', error);
        return { apps: [] };
    }
};
