<script>
	import { flip } from 'svelte/animate';
	import FormItem from './FormItem.svelte';
	import CreateForm from './CreateForm.svelte';
	export let data;

	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en';
	TimeAgo.setDefaultLocale(en.locale);
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');

	const relativeTime = (time) => {
		return timeAgo.format(new Date(time));
	};
</script>

<div class="container">
	<div class="title">
		<h3>Active forms</h3>
		<span>{data?.forms.length}/5</span>
	</div>
	<div class="forms">
		<div class="header">
			<div>id</div>
			<!-- <div>title</div> -->
			<div>created</div>
			<div>messages</div>
			<div>delete</div>
		</div>

		{#if data?.forms.length > 0}
			{#each data.forms as item, idx (item.id)}
				<div class="item-box" key={idx} animate:flip={{ duration: 200 }}>
					<FormItem
						class="item"
						id={item.id}
						title={item.title}
						created={relativeTime(item.created)}
						messages={item.msgCount}
					/>
				</div>
			{/each}
		{:else}
			<div class="suggestion">
				<p>Create a new form</p>
			</div>
		{/if}

		<CreateForm {data} />
	</div>
</div>

<style>
	.title {
		text-align: center;
		padding-bottom: 1em;
	}
	.forms {
		min-width: 500px;
		max-width: 800px;
		box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 25%);
	}
	.header {
		display: grid;
		grid-template-columns: 25% 25% 25% 25%;
		justify-items: center;
		background: rgb(89, 65, 137);
		background: linear-gradient(133deg, rgb(105 75 166) 0%, rgb(109 81 164) 100%);
		padding: 1em;
		align-items: center;
		color: white;
		text-transform: uppercase;
		border-radius: 5px 5px 0px 0px;
	}
	.suggestion {
		padding-top: 0.5em;
		text-align: center;
		font-size: large;
		background-color: white;
	}
</style>
