<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        goto('/install/step1', { replaceState: true });
    });
</script>

<div class="container">
    <p>Redirecting to installation guide...</p>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
        align-items: center;
        height: 100vh;
		padding: 40px 24px;
		width: 100%;
	}
</style>
