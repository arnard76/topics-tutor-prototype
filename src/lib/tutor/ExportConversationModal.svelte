<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { JsonView } from '@zerodevx/svelte-json-view';
	import CopyToClipboard from '$lib/components/CopyToClipboard.svelte';
	import { messages } from './message';

	let { onclose } = $props();
</script>

<Modal {onclose}>
	{#if $messages}
		<div class="flex flex-col gap-2">
			<CopyToClipboard value={JSON.stringify($messages)}>
				<JsonView json={$messages} />
			</CopyToClipboard>
		</div>
	{/if}
</Modal>
