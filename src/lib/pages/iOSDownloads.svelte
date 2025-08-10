<script>
	import Buttons from '$lib/components/Buttons.svelte';
</script>

<section>
	<h2 class="font_web_h2">Telepítési Útmutató</h2>
	<div class="content">
		<div class="card">
			<h3 class="font_header_h2">1. Lépés: madNS Profil</h3>
			<p class="font_body_16px_regular">
				Telepítsd a madNS profilt a reklámok és rosszindulatú oldalak blokkolásához. Koppints a gombra, majd kövesd a telefonod képernyőjén megjelenő utasításokat a telepítéshez.
			</p>
			<Buttons 
				label="Profil Telepítése"
				href="https://wsfteam.xyz/files/configurationprofiles/madNS-CP144.mobileconfig"
				type="small_primary"
				icon="ri:download-2-line"
			/>
		</div>

		<div class="card">
			<h3 class="font_header_h2">Telepítési Segédlet</h3>
				<video controls autoplay muted loop playsinline src="/videos/dns.mp4" style="width: 100%; max-width: 400px; border-radius: 12px; margin: 0 auto;"></video>
		</div>

		<div class="card">
			<h3 class="font_header_h2">2. Lépés: Tanúsítvány Telepítése</h3>
			<p class="font_body_16px_regular">
				Most telepítsd a tanúsítványt, hogy a készüléked megbízzon a DNS-profilban, és a szűrés megfelelően működjön.
			</p>
			<Buttons 
				label="Tanúsítvány Letöltése"
				href="https://github.com/esigncert/khoindvn/raw/refs/heads/main/document/DNS/Certs-Khoindvn.zip"
				type="small_primary"
				icon="ri:file-zip-line"
			/>
		</div>

		<div class="card">
			<h3 class="font_header_h2">3. Lépés: Hamarosan...</h3>
			<p class="font_body_16px_regular">
				A telepítési útmutató következő lépése hamarosan érkezik. Addig is, ha elakadtál, kérj segítséget a Discord szerverünkön!
			</p>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
		box-shadow: 0px 1px var(--shadow-blur) 0px var(--accent_shadowcolor);
	}

	h2 {
		color: var(--text_primary);
	}

	h3 {
		color: var(--text_secondary);
	}

	p {
		color: var(--text_teritary);
		max-width: 600px;
	}

</style>