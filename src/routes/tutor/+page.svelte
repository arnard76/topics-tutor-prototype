<script lang="ts">
	import ConversationWithTutor from '$lib/tutor/ConversationWithTutor.svelte';
	import { messages } from '$lib/tutor/message';
	import Icon from '@iconify/svelte';
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<a href="/topics" class="right items-center rounded-br-2xl border-r-6 border-b-6">
		<Icon icon="tabler:arrow-left" /> Topics
	</a>

	<ConversationWithTutor messages={$messages.filter((a) => a.from !== 'student-not-sent-yet')} />
</div>
