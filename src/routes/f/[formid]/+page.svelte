<script>
	export let form;
</script>

<div class="container">
	{#if form?.error}
		error
	{:else}
		thanks for ur msg
	{/if}
</div>

<style>
	.container {
		height: inherit;
		display: grid;
		place-items: center;
	}
</style>
