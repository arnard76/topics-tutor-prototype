<script lang="ts">
	import type { MessageType as MessageType } from './message';
	import Message from './Message.svelte';

	let { messages }: { messages: MessageType[] } = $props();
</script>

<div class="flex w-full max-w-2/3 flex-col-reverse gap-2 self-center overflow-y-auto p-4">
	{#if messages.at(-1)?.from === 'student'}
		<Message message={{ datetime: '', from: 'tutor', message: '', id: 'thinking' }}>
			<img src="/thinking.gif" alt="" class="w-16" />
		</Message>
	{/if}
	{#each messages as message (message.datetime + message.from)}
		<Message {message} />
	{/each}
</div>
