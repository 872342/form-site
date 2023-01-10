<script>
	import { activeTab } from '../../../stores/store';
	export let tab = 0;
	export let title = '';
	export let icon = '';
	export let selected = false;

	const handleTab = () => ($activeTab = tab);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => handleTab()} class="item" class:selected>
	<iconify-icon width="25" {icon} />
	<p class="item-text">{title}</p>
</div>

<style>
	.item {
		display: flex;
		align-items: center;
		border-radius: 5px;
		padding-left: 1em;
		padding-right: 1em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		margin-top: 1em;
		margin-bottom: 1em;
		font-weight: 500;
		cursor: pointer;
	}
	.item-text {
		margin-left: 1em;
	}
	.selected {
		color: white;
		background: rgb(98, 9, 121);
		background: linear-gradient(133deg, rgba(98, 9, 121, 1) 0%, rgba(188, 0, 255, 1) 100%);
		background: linear-gradient(133deg, rgb(107 75 175) 0%, rgb(157 125 222) 100%);
		box-shadow: 4px 4px 11px 0px rgb(0 0 0 / 45%);
	}

	@media only screen and (max-width: 800px) {
		.item-text {
			display: none;
		}
	}
</style>
