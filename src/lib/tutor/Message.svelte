<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MessageType } from './message';
	import { page } from '$app/stores';
	import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
	let { message, children }: { message: MessageType; children?: Snippet<[]> } = $props();

	let copyWithClick = $derived($page.url.href.includes('wizard-of-oz'));
</script>

<p
	class="flex rounded-lg px-4 py-1 whitespace-pre-wrap backdrop-blur-2xl {message.from === 'tutor'
		? 'mr-16 self-start rounded-bl-none bg-blue-400 font-mono'
		: 'ml-16 self-end rounded-br-none bg-white'}"
>
	{#if copyWithClick && message.message}
		<CopyToClipboard value={message.message} />
	{:else}
		{message.message}
	{/if}
	{@render children?.()}
</p>
