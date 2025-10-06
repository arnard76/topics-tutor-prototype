<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MessageType } from './message';
	let { message, children }: { message: MessageType; children?: Snippet<[]> } = $props();

	let b = $derived(`${message.message}`);
</script>

<p
	class="flex rounded-lg px-4 py-1 whitespace-pre-wrap backdrop-blur-2xl {message.from === 'tutor'
		? 'mr-16 self-start rounded-bl-none bg-blue-400 font-mono'
		: 'ml-16 self-end rounded-br-none bg-white'}"
>
	{message.message}
	{@render children?.()}
</p>
