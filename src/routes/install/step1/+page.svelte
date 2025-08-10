<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
</script>

<section>
	<h2 class="font_web_h2">Telepítési Útmutató</h2>
	<div class="content">
		<div class="card">
			<h3 class="font_header_h2">1. Lépés: madNS Profil</h3>
			<p class="font_body_16px_regular">
				Telepítsd a madNS profilt a revoke megelőzéséhez. Koppints a gombra, majd kövesd a telefonod képernyőjén megjelenő utasításokat a telepítéshez.
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

		<div class="navigation-buttons">
			<Buttons 
				label="Következő"
				href="/install/step2"
				type="small_secondary"
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

	.navigation-buttons {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		margin-top: 24px;
	}
</style>
