<script lang="ts">
	import Buttons from '$lib/components/Buttons.svelte';
</script>

<section>
	<h2 class="font_web_h2">Telepítési Útmutató</h2>
	<div class="content">
		<div class="card">
			<h3 class="font_header_h2">2. Lépés: Tanúsítvány Telepítése</h3>
			<p class="font_body_16px_regular">
				Most telepítsd a tanúsítványt hogy, a telefonod megbízzon az ESign-ban.
			</p>
			<Buttons 
				label="Tanúsítvány Letöltése"
				href="https://github.com/esigncert/khoindvn/raw/refs/heads/main/document/DNS/Certs-Khoindvn.zip"
				type="small_primary"
				icon="ri:file-zip-line"
			/>
		</div>

		<div class="navigation-buttons">
			<Buttons 
				label="Vissza"
				href="/install/step1"
				type="small_secondary"
				icon="ri:arrow-left-line"
			/>
			<Buttons 
				label="Következő"
				href="/install/step3"
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
		justify-content: space-between;
		width: 100%;
		margin-top: 24px;
	}
</style>
