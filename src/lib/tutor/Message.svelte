<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MessageType } from './message';
	import { page } from '$app/stores';
	import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
	import { marked } from 'marked';

	let { message, children }: { message: MessageType; children?: Snippet<[]> } = $props();
	let copyWithClick = $derived($page.url.href.includes('wizard-of-oz'));
</script>

<div
	class="flex rounded-lg px-4 py-1 whitespace-pre-wrap text-black backdrop-blur-2xl {message.from ===
	'tutor'
		? 'mr-16 self-start rounded-bl-none bg-blue-400 font-mono'
		: 'ml-16 self-end rounded-br-none bg-white'}"
>
	<div class="prose mb-0 flex h-min flex-col pb-0">
		{@html marked(message.message)}
	</div>
	{@render children?.()}
	{#if copyWithClick && message.message}
		<CopyToClipboard value={message.message}>|</CopyToClipboard>
	{/if}
</div>
