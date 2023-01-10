<script>
	export let data;

	import FormsTable from './FormsTable.svelte';
</script>

<div class="container">
	<FormsTable {data} />
</div>

<style>
	.container {
		display: grid;
	}
</style>
