<script>
	import { activeMessageTab } from '../../../../stores/store';
	export let data;

	$: messages = [];
	$: {
		data, $activeMessageTab;
		console.log(activeMessageTab, getMessages());
		getMessages();
	}

	const getMessages = () => {
		const id = $activeMessageTab;
		const x = data.messages.filter((el) => el.formid === id);
		messages = [...x];
	};
</script>

{#if messages.length > 0}
	{#each messages as msg}
		<div class="msg-container">
			<div class="name">From: {msg.name}</div>
			<div class="email">Email: {msg.email}</div>
			<div class="message">Content: {msg.message}</div>
		</div>
	{/each}
{/if}

<style>
	.msg-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content 1fr;
		grid-template-areas: 'name email' 'message message';
		background: white;
		margin: 1em;
		padding: 1em;
		border-bottom: 1px solid rgb(96, 96, 96);
	}

	.name {
		grid-area: name;
	}
	.email {
		grid-area: email;
	}
	.message {
		grid-area: message;
	}

	@media only screen and (max-width: 800px) {
		.msg-container {
			margin: 0.5em;
			padding: 0.25em;
			font-size: smaller;
		}
	}
</style>
