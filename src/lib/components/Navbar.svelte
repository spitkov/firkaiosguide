<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/global.css';
	import Buttons from '$lib/components/Buttons.svelte';
	let brandingHover = false;

	export let navLinks = [
       // i dont think we need nav links but i stole it from the original repo
    ];
	export let normalLogo = '/dave.svg'
	let hoverLogo = '/dave-hover.gif';

	onMount(() => {
		const currentMonth = new Date().getMonth();
		if (currentMonth === 5) {
			hoverLogo = '/dave-hover.pride.gif';
		}
	});
</script>

<nav>
	<div class="branding">
		<a href="/" on:mouseenter={() => (brandingHover = true)} on:mouseleave={() => (brandingHover = false)}>
			<img src={brandingHover ? hoverLogo : normalLogo} alt="logo" />
			<h1 class="font_header_h1">Firka Napló iOS Letöltés</h1>
		</a>
	</div>
	<div class="links">
		{#each navLinks as link}
			<Buttons label={link.name} type={link.style} href={link.url}></Buttons>
		{/each}
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 48px;
		left: 48px;
		right: 48px;
		z-index: 1000;
		height: 40px;
	}
	div.branding a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 24px;
		text-decoration: none;
		color: var(--text_primary);
	}

	div.links {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	div.branding a img {
		width: 40px;
		height: 40px;
	}

	@media (max-width: 768px) {
		nav {
			position: static;
			flex-direction: column;
			padding: 72px 20px 0 20px;
			height: auto;
			gap: 40px;
            margin-bottom: 72px;
		}
		div.branding {
			text-align: center;
		}
		div.branding a {
			flex-direction: column;
			gap: 16px;
		}

		div.links {
			justify-content: center;
			width: 100%;
		}
	}
</style>
