<script lang="ts">
	import type { PageData } from './$types';
	import Buttons from '$lib/components/Buttons.svelte';

    export let data: PageData;
</script>

<section>
    <h2 class="font_web_h2">3. Lépés: E-Sign App Telepítése</h2>
    <p class="font_body_16px_regular" style="max-width: 600px;">
        Próbáld ki az elsőt a listából. Ha 'integritási' hibát kapsz, töröld az előzőt, és próbálj meg egy másikat. Ha egyik sem működik, kérj segítséget a Discord szerverünkön.
    </p>
    {#if data.apps && data.apps.length > 0}
        <div class="grid">
            {#each data.apps as app}
                <div class="card">
                    <h3 class="font_header_h2">{app.name}</h3>
                    <p class="font_body_16px_regular">{app.descriptions}</p>
                    <Buttons 
                        label="Telepítés"
                        href={app.installUrl}
                        type="small_primary"
                        icon="ri:download-2-line"
                    />
                </div>
            {/each}
        </div>
    {:else}
        <p>Nincsenek elérhető alkalmazások, vagy hiba történt a betöltés során. Próbáld újra később.</p>
    {/if}

    <div class="navigation-buttons">
        <Buttons 
            label="Vissza"
            href="/install/step2"
            type="small_secondary"
            icon="ri:arrow-left-line"
        />
        <Buttons 
            label="Következő"
            href="/install/step4"
            type="small_primary"
            icon="ri:arrow-right-line"
            iconPosition="right"
        />
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
        max-width: 1200px;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
        justify-content: space-between;
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
        min-height: 48px; /* Ensure cards have similar height */
    }

    .navigation-buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 24px;
    }
</style>
