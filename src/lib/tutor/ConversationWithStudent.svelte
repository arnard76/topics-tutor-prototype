<script lang="ts">
	import { chronologicalMessages, messagesApi, type MessageType as MessageType } from './message';
	import dayjs from 'dayjs';
	import MultiInput from '$lib/MultiInput.svelte';
	import Messages from './Messages.svelte';

	let { messages = [] }: { messages: MessageType[] } = $props();

	function addNewMessage(message: string) {
		console.log('adding new message');
		messagesApi.add({
			datetime: dayjs().toISOString(),
			from: 'tutor',
			message
		});
	}
	let socraticReplyDraft = $state('');

	$effect(() => {
		console.log(messages);
	});
</script>

<div class="flex h-full flex-col justify-end">
	<Messages messages={$chronologicalMessages} />
	<div class="p-4">
		<label class="text-xl text-white">
			Reply to your student's questions?

			<textarea
				class="auto-resize mr-16 flex self-start rounded-lg rounded-bl-none bg-blue-400 px-4 py-1 font-mono whitespace-pre-wrap backdrop-blur-2xl"
				bind:value={socraticReplyDraft}
				onkeypress={(e) => {
					if (e.key === 'Enter' && socraticReplyDraft) {
						addNewMessage(socraticReplyDraft);
						socraticReplyDraft = '';
					}
				}}
			></textarea>
		</label>
	</div>
	<MultiInput
		questionFromKeyboardInput={messages.find((a) => a.from === 'student-not-sent-yet')?.message ||
			''}
		onEnter={() => {}}
		readonly
	/>
</div>

<style>
	textarea.auto-resize {
		field-sizing: content;
		min-height: 50px; /* Optional: Set a minimum height */
		max-height: 200px; /* Optional: Set a maximum height */
		overflow-y: auto; /* Show scrollbar if max-height is reached */
	}
</style>
