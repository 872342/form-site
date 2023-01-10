<script>
	import SidebarItem from './SidebarItem.svelte';

	import { activeTab } from '../../../stores/store';
</script>

<div class="sidebar-content">
	<div class="lol">
		<iconify-icon width="70" icon="fluent-emoji-high-contrast:parrot" />
		<p>Peep</p>
	</div>

	<div class="item-container">
		<SidebarItem
			title="Dashboard"
			icon="ic:round-grid-view"
			tab={1}
			selected={$activeTab == 1 ? true : false}
		/>

		<SidebarItem
			title="Forms"
			icon="material-symbols:edit-document"
			tab={2}
			selected={$activeTab == 2 ? true : false}
		/>

		<SidebarItem
			title="Messages"
			icon="ic:round-email"
			tab={3}
			selected={$activeTab == 3 ? true : false}
		/>
	</div>

	<div class="bottom">
		<iconify-icon width="25" icon="mdi:cog" />
		<p class="mono">＼(´ ∀ ` *)</p>
	</div>
</div>

<style>
	.sidebar-content {
		background-color: #efefef;
		box-shadow: 3px 0px 17px 7px rgb(0 0 0 / 35%);
		display: grid;
		grid-template-rows: 100px 1fr 1fr;
		height: 100%;
		color: rgb(96, 96, 96);
	}
	.lol {
		padding: 1em;
		display: grid;
		place-items: center;
		color: rgb(187, 187, 187);
	}

	.item-container {
		margin: 1em;
	}

	.bottom {
		align-self: end;
		margin: 1em;
		display: flex;
		justify-content: space-between;
	}
	.bottom p {
		user-select: none;
		color: #c4c4c4;
		font-size: x-small;
		align-self: end;
	}

	@media only screen and (max-width: 800px) {
		.lol {
			display: none;
		}
		.sidebar-content {
			display: grid;
			grid-template-rows: 1fr 1fr;
		}
		.mono {
			display: none;
		}
		.bottom {
			justify-content: center;
		}
		.item-container {
			margin: 0;
		}
	}
</style>
