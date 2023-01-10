<script>
	export let data;
	import DashboardCard from './DashboardCard.svelte';
	import { page } from '$app/stores';

	import hljs from 'highlight.js/lib/common';
	import xml from 'highlight.js/lib/languages/xml';
	hljs.registerLanguage('xml', xml);
	import 'highlight.js/styles/github-dark-dimmed.css';

	const test = hljs.highlight(
		`<form action="${$page.url.origin}/f/{form_id}" method="post">
    <input name="name" id="name" type="text" placeholder="Name">
    <input name="email" id="email" type="email"  placeholder="Email">
    <textarea name="message" cols="25" rows="6" placeholder="Message"/>
    <button type="submit">Submit</button>
</form>`,
		{ language: 'xml' }
	).value;
</script>

<h3 class="title">Dashboard details</h3>
<div class="container">
	<DashboardCard
		title="Messages"
		detail={data?.messages.length || 0}
		icon="ic:round-email"
		primaryColor="#775baf"
		secondaryColor="#62479b"
	/>

	<DashboardCard
		title="Active forms"
		detail="{data?.forms.length || 0}/5"
		icon="material-symbols:format-align-left-rounded"
		primaryColor="#775baf"
		secondaryColor="#62479b"
	/>
	<div class="htmlembed">
		<pre><code>{@html test}</code></pre>
	</div>
</div>

<div class="title" />

<style>
	.title {
		text-align: center;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.htmlembed {
		width: min-content;
		overflow: auto;
		color: #adbac7;
		background: #22272e;
		margin: 1em;
		padding: 1em;
		border-radius: 5px;
	}
</style>
