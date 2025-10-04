<script lang="ts">
	import ConversationWithStudent from '$lib/tutor/ConversationWithStudent.svelte';
	import { messages } from '$lib/tutor/message';
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<h2 class="text-white">WIZARD OF OZ MODE</h2>
	<p class="absolute text-xl text-white">
		you pretend to be a socratic tutor, reply with meaningful responses that help the student learn.
	</p>
	<ConversationWithStudent messages={$messages} />
</div>
