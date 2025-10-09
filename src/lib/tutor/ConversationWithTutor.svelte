<script lang="ts">
	import { chronologicalMessages, messagesApi, studentDraftMessage } from './message';
	import dayjs from 'dayjs';
	import MultiInput from '$lib/MultiInput.svelte';
	import Messages from './Messages.svelte';

	function addNewMessage(message: string) {
		console.log('adding new message');
		messagesApi.add({
			datetime: dayjs().toISOString(),
			from: 'student',
			message
		});
	}
	let newMessage = $derived($studentDraftMessage?.message);

	$effect(() => {
		if (newMessage === undefined) return;
		messagesApi.updateFull({
			id: 'current-input',
			datetime: dayjs().toISOString(),
			from: 'student-not-sent-yet',
			message: newMessage || ''
		});
	});
</script>

<div class="flex h-full flex-col justify-end gap-2">
	<Messages messages={$chronologicalMessages} />
	<MultiInput bind:questionFromKeyboardInput={newMessage} onEnter={addNewMessage} />
</div>
