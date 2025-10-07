<script lang="ts">
	import ConversationWithTutor from '$lib/tutor/ConversationWithTutor.svelte';
	import { messages } from '$lib/tutor/message';
	import Icon from '@iconify/svelte';
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<a
		href="/reading-material"
		class="right no-translate m-4 flex items-center gap-2 rounded-xl border-2 text-nowrap"
	>
		<Icon icon="twemoji:open-book" style="font-size: 1.3em;" /> Continue reading
	</a>

	<ConversationWithTutor />
</div>
