<script>
	import { activeMessageTab } from '../../../../stores/store';

	export let id;
	export let selected = false;

	const handleTab = () => {
		$activeMessageTab = id;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => handleTab()} class="item" class:selected><p>{id}</p></div>

<style>
	.item {
		display: flex;
		align-items: center;
		border-radius: 0px 3px 3px 0px;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		font-weight: 500;
		cursor: pointer;
		padding: 1em;
	}

	.selected {
		width: 105%;
		color: white;
		background: rgb(98, 9, 121);
		background: linear-gradient(133deg, rgba(98, 9, 121, 1) 0%, rgba(188, 0, 255, 1) 100%);
		background: linear-gradient(133deg, rgb(107 75 175) 0%, rgb(157 125 222) 100%);
	}

	@media only screen and (max-width: 800px) {
		.selected {
			width: 100%;
		}
	}
</style>
