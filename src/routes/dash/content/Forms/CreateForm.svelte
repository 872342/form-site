<script>
	export let data;
	import { enhance } from '$app/forms';
</script>

<div class="create">
	<form
		class="create-form"
		action="?/create"
		method="POST"
		use:enhance={() => {
			return async ({ result, update }) => {
				if (result.data?.forms && result.data?.messages) {
					data.forms = result.data?.forms;
					data.messages = result.data?.messages;
				}
				update();
			};
		}}
	>
		<!-- <input type="text" name="title" placeholder="Optional title" maxlength="100"> -->
		<button
			name="submit"
			title="Create new contact form"
			type="submit"
			disabled={data.forms.length < 5 ? false : true}
			class="btn"
		>
			<iconify-icon icon="material-symbols:add-notes" width="25" />
		</button>
	</form>
</div>

<style>
	.create {
		display: grid;

		justify-items: center;
		background-color: white;
		padding: 0.25em;
		align-items: center;
	}

	.btn {
		border: 0;
		margin: 0.25rem;
		cursor: pointer;
		text-decoration: none;
		padding: 0.5rem;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		color: rgb(255 255 255);
		background-color: #d95151;
	}

	.btn:hover {
		background-color: #e07373;
	}

	button:disabled,
	button[disabled] {
		cursor: default;
		background-color: rgb(199, 199, 199);
		color: rgb(164, 164, 164);
	}
	button:disabled:hover,
	button[disabled]:hover {
		cursor: default;
		background-color: rgb(199, 199, 199);
		color: rgb(164, 164, 164);
	}
</style>
