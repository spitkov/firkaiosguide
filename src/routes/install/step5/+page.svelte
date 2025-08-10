<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';

	let copyButtonText = 'Másolás';
	let copyButtonIcon = 'ri:clipboard-line';
	const repoUrl = 'https://raw.githubusercontent.com/spitkov/firkarepo/refs/heads/main/esign.json';

	function copyToClipboard() {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(repoUrl).then(showSuccess);
		} else {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = repoUrl;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			try {
				document.execCommand('copy');
				showSuccess();
			} catch (err) {
				console.error('Fallback: Oops, unable to copy', err);
			}
			document.body.removeChild(textArea);
		}
	}

	function showSuccess() {
		copyButtonText = 'Másolva!';
		copyButtonIcon = 'ri:check-line';
		setTimeout(() => {
			copyButtonText = 'Másolás';
			copyButtonIcon = 'ri:clipboard-line';
		}, 2000);
	}
</script>

<section>
    <h2 class="font_web_h2">5. Lépés: Firka Telepítése</h2>
    <div class="content">
        <div class="card">
            <ol class="instructions font_body_16px_regular">
                <li>
                    Menj az AppStore fülre alul, aztán bal felül kattints az <strong>App Source</strong> gombra. Ezután jobb felül kattints a <strong>+</strong>-ra és másold be a következő URL-t:
                    <div class="copy-container">
                        <code class="url-code">{repoUrl}</code>
                        <Buttons 
                            tag="button"
                            on:click={copyToClipboard}
                            label={copyButtonText}
                            icon={copyButtonIcon}
                            type="small_secondary"
                        />
                    </div>
                </li>
                <li>Menj vissza és az AppStore fülben látni fogod a Firká-t.</li>
                <li>Kattints a <strong>Download</strong> gombra.</li>
                <li>A Download fülben láthatod a letöltést. Ha letöltött, kattints rá és nyomd meg az <strong>Import App Library</strong> gombot.</li>
                <li>Azután menj az Apps fülre és válaszd ki a Firkát. Kattints a <strong>Signature</strong>-re, aztán megint <strong>Signature</strong>. (Fontos: ne lépj ki az ESign-ból, amíg nem jelennek meg az "Install" és "Exit" gombok.)</li>
                <li>Ha végzett, kattints az <strong>Install</strong> gombra. Fel fog jönni egy kis menü, hogy "esign.yyyue.xyz telepíteni akarja a Firkát" – itt kattints a <strong>Telepítés</strong> gombra.</li>
                <li>És kész is 🎉</li>
            </ol>
        </div>

        
        <div class="videocard">
            <h2 class="font_web_h3">Telepítési Segédlet</h2>
                <video controls autoplay muted loop playsinline src="/videos/esign2.mp4" style="width: 100%; max-width: 400px; border-radius: 12px; margin: 0 auto;"></video>
        </div>
        <div class="navigation-buttons">
            <Buttons 
                label="Vissza"
                href="/install/step4"
                type="small_secondary"
                icon="ri:arrow-left-line"
            />
            <Buttons 
                label="Befejezés"
                href="/"
                type="small_primary"
                icon="ri:check-line"
                iconPosition="right"
            />
        </div>
    </div>
    
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
        max-width: 800px;
        text-align: center;
    }

    .content {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 100%;
	}

    .card {
        background-color: var(--card_card);
        border-radius: 16px;
        padding: 24px;
        width: 100%;
        text-align: left;
        box-shadow: 0px 1px var(--shadow-blur) 0px var(--accent_shadowcolor);
    }
    .videocard {
		background-color: var(--card_card);
		border-radius: 16px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
		box-shadow: 0px 1px var(--shadow-blur) 0px var(--accent_shadowcolor);
	}

    .instructions {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h2 {
        color: var(--text_primary);
    }

    .instructions li {
        line-height: 1.6;
        color: var(--text_teritary);
    }

    .copy-container {
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: var(--button_secondaryfill);
        padding: 8px 12px;
        border-radius: 8px;
        margin-top: 12px;
    }

    .url-code {
        word-break: break-all;
        background: none;
        padding: 0;
    }



    code {
        font-family: 'Figtree', sans-serif;
    }

    .navigation-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 24px;
    }
</style>
