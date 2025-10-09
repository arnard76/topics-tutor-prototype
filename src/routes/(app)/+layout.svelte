<script lang="ts">
	import { messages, studentDraftMessage } from '$lib/tutor/message';

	let { children } = $props();

	$studentDraftMessage;
	$messages;
</script>

<div class="bg-linear-to-r from-bg-1 to-bg-2">
	{@render children?.()}
</div>
