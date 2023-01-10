<script>
	export let data;
	import { activeTab } from '../../stores/store';

	import Sidebar from './sidebar/Sidebar.svelte';

	import Form from './content/Forms/Form.svelte';
	import Dashboard from './content/dashboard/Dashboard.svelte';
	import Messages from './content/messages/Messages.svelte';

	$: {
		data, countMessages();
	}

	function countMessages() {
		for (let form of data.forms) {
			form['msgCount'] = 0;
			for (let message of data.messages) {
				if (message.formid === form.id) {
					form['msgCount'] += 1;
				}
			}
		}
	}
</script>

<div class="container">
	<div class="sidebar">
		<Sidebar />
	</div>

	<div class="main">
		{#if $activeTab === 1}
			<Dashboard {data} />
		{:else if $activeTab === 2}
			<Form {data} />
		{:else if $activeTab === 3}
			<Messages {data} />
		{/if}
	</div>
</div>

<style>
	/* fonie */
	@media only screen and (max-width: 600px) {
	}

	.container {
		color: rgb(56, 56, 56);
		display: grid;
		grid-template-columns: 270px 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'sidebar main main main'
			'sidebar main main main';
		background-color: rgb(234 237 240);
		height: inherit;
		overflow: hidden;
	}

	.sidebar {
		grid-area: sidebar;
	}

	.main {
		margin: 1em;
		grid-area: main;
		overflow-y: auto;
	}

	@media only screen and (max-width: 800px) {
		.container {
			grid-template-columns: 60px 1fr 1fr 1fr;
		}
	}

	* {
		font-family: 'Sunflower', sans-serif;
		font-weight: lighter;
	}
</style>
