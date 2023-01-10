<script>
	export let data;
	import '../app.css';
	import { page } from '$app/stores';
	let navHeight = '50px';
</script>

<svelte:head>
	<script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
</svelte:head>

<nav class="navbar" style="--nav-height:{navHeight}">
	<div class="nav-home">
		<a href="/">FormSite</a>
	</div>
	<div class="nav-links">
		<!-- <a href="/nothing" class="link">About</a> -->

		{#if data.user}
			<p>Hello, {data.user?.username}</p>
			<a href="/logout" class="btn">
				Logout
				<iconify-icon icon="ic:baseline-log-out" />
			</a>
		{:else if $page.route.id !== '/login'}
			<a href="/login" class="btn">
				Login
				<iconify-icon icon="ic:baseline-log-in" />
			</a>
		{/if}
	</div>
</nav>

<div class="content" style="--nav-height:{navHeight}">
	<slot />
</div>

<style>
	.navbar {
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
		width: 100%;
		text-align: justify;
		height: var(--nav-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: rgb(98 71 155);
		background: linear-gradient(133deg, rgb(98 71 155) 0%, rgb(121 93 177) 100%);
	}

	/* home link - left*/
	.nav-home a {
		text-decoration: none;
		color: white;
		font-size: 1.5em;
		margin-left: 0.5em;
	}

	/* other links - right */
	.nav-links {
		place-content: center;
		display: inline-flex;
	}

	.nav-links a,
	.nav-links p {
		margin-right: 0.5rem;
		text-decoration: none;
		padding: 0.25rem;
		border-radius: 5px;
		color: white;
	}

	.nav-links .btn {
		color: rgb(224, 224, 224);
		/* background-color: rgb(56, 56, 56); */

		/* align icon within btn vertically */
		display: inline-flex;
		align-items: center;
	}

	.nav-links .btn:hover {
		color: rgb(56, 56, 56);
		background-color: rgb(224, 224, 224);
	}

	.content {
		height: calc(100vh - var(--nav-height));
	}
</style>
