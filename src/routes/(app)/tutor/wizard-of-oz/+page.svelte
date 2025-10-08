<script lang="ts">
	import ConversationWithStudent from '$lib/tutor/ConversationWithStudent.svelte';
	import ExportConversationModal from '$lib/tutor/ExportConversationModal.svelte';
	import { messages, messagesApi } from '$lib/tutor/message';
	let showConversation = $state(false);
	function downloadConversation() {
		const userDataString =
			'data:text/json;charset=utf-8,' +
			encodeURIComponent(JSON.stringify({ conversation: $messages }));
		const downloadEl = document.createElement('a');
		downloadEl.setAttribute('href', userDataString);
		downloadEl.setAttribute('download', `Student & Socratic Tutor Conversation.json`);
		downloadEl.click();
	}
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<h2 class="text-white">WIZARD OF OZ MODE</h2>

	<div class="flex items-center justify-between">
		<button
			class="text-nowrap"
			onclick={() => {
				downloadConversation();
				showConversation = true;
			}}
		>
			Export Conversation
		</button>
		<button
			class="m-4 text-nowrap"
			ondblclick={() => {
				messagesApi.deleteAll();
			}}
		>
			💀⚠️ Clear Conversation 💀 ⚠️
		</button>
	</div>
	{#if showConversation}<ExportConversationModal onclose={() => (showConversation = false)} />{/if}

	<p class="absolute text-xl text-white">
		you pretend to be a socratic tutor, reply with meaningful responses that help the student learn.
	</p>
	<ConversationWithStudent />
</div>
