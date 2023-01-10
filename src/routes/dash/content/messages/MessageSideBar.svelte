<script>
	import MessageSidebarItem from './MessageSidebarItem.svelte';
	import { activeMessageTab } from '../../../../stores/store';

	export let data;
</script>

{#if data?.forms}
	{#each data.forms as form}
		{#if form.msgCount > 0}
			<MessageSidebarItem id={form.id} selected={$activeMessageTab == form.id ? true : false} />
		{/if}
	{/each}
{/if}

<style>
</style>
