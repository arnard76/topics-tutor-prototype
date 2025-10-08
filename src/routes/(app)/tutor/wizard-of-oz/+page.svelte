<script lang="ts">
	import { chunkProgress } from '$lib/reading/reading-material';
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
	<div class="flex items-center justify-between bg-amber-600">
		<h2 class="text-white">WIZARD OF OZ MODE</h2>
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

	<p class="absolute w-full bg-amber-600 pb-4 text-xl text-white">
		you pretend to be a socratic tutor, reply with meaningful responses that help the student learn.
		The student is currently on Paragraph {$chunkProgress + 1}
	</p>
	<ConversationWithStudent />
</div>
