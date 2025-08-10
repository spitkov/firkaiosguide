import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  preview: {
    allowedHosts: ["localhost", "127.0.0.1", "ipa.firka.app"],
  },
});
