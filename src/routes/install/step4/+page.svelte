<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
</script>

<section>
    <h2 class="font_web_h2">4. Lépés: Tanúsítványok Telepítése</h2>
    <div class="content">
        <div class="card">
            <ol class="instructions font_body_16px_regular">
                <li>Nyisd meg a telpített ESign alkalmazást.</li>
                <li>Kattints alul a <strong>File</strong> gombra.</li>
                <li>Aztán a <strong>3 pöttyre</strong> jobb felül.</li>
                <li>Keresd meg a letöltött <code>certificates.zip</code> fájlt és importáld.</li>
                <li>Kattints a zip-re és utána <strong>Unzip</strong>.</li>
                <li>Keresd meg a mappát, ami a telepített ESign alkalmazásod nevével egyezik.</li>
                <li>
                    <strong>Ha a letöltött tanúsítványod <code>.esigncert</code> fájl:</strong>
                    <ul>
                        <li>A kicsomagolt mappában, az <code>ESignCert</code> mappán belül találod a fájlokat.</li>
                        <li>Kattints a megfelelő <code>.esigncert</code> fájlra, majd <strong>Import Certificate Managment</strong>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ha a letöltött tanúsítványod <code>.p12</code> és <code>.mobileprovision</code> fájl:</strong>
                    <ul>
                        <li>Először kattints a <code>.mobileprovision</code> fájlra és <strong>Import</strong>. (Egy kínai szöveg jelenhet meg.)</li>
                        <li>Azután kattints a <code>.p12</code> fájlra. Ha jelszót kér, írd be: <strong>WSF</strong></li>
                    </ul>
                </li>
            </ol>
        </div>

        <div class="videocard">
			<h2 class="font_web_h3">Telepítési Segédlet</h2>
				<video controls autoplay muted loop playsinline src="/videos/esign1.mp4" style="width: 100%; max-width: 400px; border-radius: 12px; margin: 0 auto;"></video>
		</div>

		<div class="navigation-buttons">
            <Buttons 
                label="Vissza"
                href="/install/step3"
                type="small_secondary"
                icon="ri:arrow-left-line"
            />
            <Buttons 
                label="Következő"
                href="/install/step5"
                type="small_primary"
                icon="ri:arrow-right-line"
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

    .instructions {
        color: var(--text_primary);
    }

    .instructions li {
        line-height: 1.6;
    }

    .instructions ul {
        padding-left: 20px;
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    code {
        background-color: var(--button_secondaryfill);
        padding: 2px 6px;
        border-radius: 4px;
    }

    h2 {
        color: var(--text_primary);
        font-family: 'Figtree', sans-serif;
    }

    .navigation-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 24px;
    }
</style>
