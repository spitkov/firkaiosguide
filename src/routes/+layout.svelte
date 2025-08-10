<script lang="ts">
	export const prerender = true;
	import '$lib/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page-container">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global(html) {
		scroll-behavior: smooth;
	}
	:global(body) {
		background: var(--background);
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding: 80px 20px;
	}

	@media (max-width: 768px) {
		main {
			padding: 40px 20px;
		}
	}
</style>
