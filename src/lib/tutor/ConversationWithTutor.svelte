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
			from: 'student',
			message
		});
	}
	let newMessage = $state('');

	$effect(() => {
		console.log(messages);
	});

	$effect(() => {
		messagesApi.updateFull({
			id: 'current-input',
			datetime: dayjs().toISOString(),
			from: 'student-not-sent-yet',
			message: newMessage
		});
	});
</script>

<div class="flex h-full flex-col justify-end">
	<Messages messages={$chronologicalMessages.filter((a) => a.from !== 'student-not-sent-yet')} />
	<MultiInput bind:questionFromKeyboardInput={newMessage} onEnter={addNewMessage} />
</div>
