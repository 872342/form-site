<script>
	import { enhance } from '$app/forms';

	export let id = '';
	// export let title="No title set";
	export let created = '';
	export let messages = '';
</script>

<div class="item">
	<div class="id">{id}</div>
	<!-- <div class="name">
        {#if title }
            {title}
        {:else}
            <i>No title set</i>
        {/if}
    </div> -->
	<div class="created">{created}</div>
	<div class="messages">{messages}</div>
	<div class="trash">
		<form
			action="?/delete"
			method="POST"
			use:enhance={() => {
				return async ({ result, update }) => {
					console.log(result);
					update();
				};
			}}
		>
			<input type="hidden" name="id" value={id} />
			<button type="submit" class="btn delete">
				<iconify-icon icon="ion:trash" width="20" />
			</button>
		</form>
	</div>
</div>

<style>
	.item {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		justify-items: center;
		background-color: white;
		padding: 1em;
		align-items: center;
		border-bottom: 1px solid rgb(96, 96, 96);
	}

	.btn {
		border: 0;
		margin: 0.25rem;
		cursor: pointer;
		text-decoration: none;
		padding: 0.25rem;
		border-radius: 5px;
		color: rgb(56, 56, 56);
		background-color: rgb(224, 224, 224);
		display: inline-flex;
		align-items: center;
	}

	.btn:hover {
		background-color: rgb(184, 184, 184);
	}

	.delete:hover {
		background-color: rgb(239 80 90);
	}
</style>
