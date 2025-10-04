<script lang="ts">
	import { messagesApi, type MessageType as MessageType } from './message';
	import dayjs from 'dayjs';
	import MultiInput from '$lib/MultiInput.svelte';
	import Messages from './Messages.svelte';

	let { messages = [] }: { messages: MessageType[] } = $props();

	let chronologicalMessages = $derived(
		messages.sort((a, b) => (dayjs(a.datetime).isBefore(b.datetime) ? -1 : 1))
	);

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
	<Messages messages={chronologicalMessages} />
	<MultiInput bind:questionFromKeyboardInput={newMessage} onEnter={addNewMessage} />
</div>
