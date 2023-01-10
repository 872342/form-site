<script>
	import { browser } from '$app/environment';

	export let data;
	function gotoAuthProvider() {
		if (browser) {
			document.cookie = `state=${data.authProviderState};`;
		}
		window.location.href = data.authProviderRedirect || '';
	}
</script>

<div class="container">
	<div class="logins">
		<button on:click={gotoAuthProvider} class="btn github">
			<iconify-icon icon="mdi:github" width="50" height="50" />
			Login with GitHub
		</button>

		<button class="btn twitch">
			<iconify-icon icon="mdi:twitch" width="50" height="50" />
			Login with Twitch
		</button>

		<button class="btn discord">
			<iconify-icon icon="ic:baseline-discord" width="50" height="50" />
			Login with Discord
		</button>
	</div>
</div>

<style>
	.container {
		height: inherit;
		display: grid;
		place-items: center;
	}
	.logins {
		display: flex;
		flex-direction: column;
	}
	.btn {
		border: 0;
		border-radius: 0.25rem;
		color: white;
		font-family: system-ui, sans-serif;
		font-size: 1rem;
		line-height: 1.2;
		white-space: nowrap;
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		margin: 0.25rem;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		transition: 0.15s ease-in-out;
	}

	.github {
		background: #3c3c3c;
	}

	.discord {
		background: #7289da;
	}

	.twitch {
		background: #6441a5;
	}

	.btn:hover {
		box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.807);
		filter: saturate(1);
	}
</style>
