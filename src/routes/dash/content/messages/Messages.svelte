<script>
	export let data;
	import MessageSideBar from './MessageSideBar.svelte';
	import MessageTable from './MessageTable.svelte';
	import { activeMessageTab } from '../../../../stores/store';
</script>

<div class="title">
	<h3>Messages</h3>
	<span>Forms with at least one message will display here</span>
</div>

<div class="container">
	<div class="header"><p /></div>

	{#if data?.forms.length == 0 || data?.messages.length == 0}
		<div class="addresses">
			<div class="nomessage">
				<iconify-icon width="40" icon="uil:sad-dizzy" />
			</div>
		</div>
		<div class="content">
			<p class="noselect">There are no messages to show.</p>
		</div>
	{:else}
		<div class="addresses">
			<MessageSideBar {data} />
		</div>
		<div class="content">
			{#if $activeMessageTab === 0}
				<p class="noselect">Select a form ID to display its messages.</p>
			{:else}
				<MessageTable {data} />
			{/if}
		</div>
	{/if}
</div>

<style>
	.container {
		display: grid;
		grid-template-areas: 'header header' 'sidebar content';
		grid-template-rows: min-content 1fr;
		grid-template-columns: min-content 1fr;
		background: white;
		min-width: 500px;
		max-width: 800px;
		box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 25%);
	}
	.header {
		grid-area: header;
		justify-items: center;
		background: rgb(89, 65, 137);
		background: linear-gradient(133deg, rgb(105 75 166) 0%, rgb(109 81 164) 100%);
		padding: 1em;
		align-items: center;
		color: white;
		border-radius: 5px 5px 0px 0px;
	}
	.addresses {
		background-color: #e2e5e8;
		box-shadow: 1px 0px 3px 0px rgb(0 0 0 / 16%);
	}
	.addresses .nomessage {
		display: grid;
		place-items: center;
		width: 200px;
		height: 200px;
	}

	.content .noselect {
		height: 100%;
		display: grid;
		place-items: center;
	}

	.title {
		text-align: center;
		padding-bottom: 1em;
	}

	@media only screen and (max-width: 800px) {
		.addresses {
			font-size: smaller;
		}
	}
</style>
