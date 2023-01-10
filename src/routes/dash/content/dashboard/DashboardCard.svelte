<script>
	export let title;
	export let detail;
	export let icon;
	export let primaryColor;
	export let secondaryColor;
</script>

<div class="card" style="--primary-color: {primaryColor}; --secondary-color: {secondaryColor}">
	<div class="icon-container">
		<iconify-icon class="icon" width="40" {icon} />
	</div>
	<div class="card-title">
		{title}
	</div>
	<div class="card-detail">
		{detail}
	</div>
</div>

<style>
	.card {
		margin: 1em;
		display: grid;
		grid-template-columns: 100px 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'icon title'
			'icon detail';
		border-radius: 5px;
		width: 250px;
		height: 75px;
		color: white;
		box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 25%);
		background: var(--primary-color);
	}
	.icon-container {
		height: 75px;
		width: 100px;
		display: grid;
		place-content: center;
		border-radius: 2px;
		grid-area: icon;
	}

	.icon-container {
		background: var(--secondary-color);
	}
	.card-title {
		grid-area: title;
		margin-left: 1rem;
		font-weight: 500;
		font-size: larger;
		display: flex;
		align-self: end;
		justify-content: left;
	}
	.card-detail {
		grid-area: detail;
		margin-left: 1rem;
		font-size: xx-large;
		display: flex;
		align-self: baseline;
		position: relative;
		top: -5px;
	}
</style>
