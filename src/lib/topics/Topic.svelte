<script>
	import { Handle, Position } from '@xyflow/svelte';
	import { selectTopic } from './selectedTopic';
	let { topic } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onclick={() => selectTopic(topic.label)}
	class="rounded-full bg-black/25 bg-linear-90 px-16 py-4 font-friendly text-white shadow-2xl/20 inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm"
>
	<p>{topic.label}</p>

	<!-- Target handle (incoming connections) -->
	<Handle type="target" position={Position.Left} id="in" style="background: #ff6b6b;" />

	<!-- Source handle (outgoing connections) -->
	<Handle type="source" position={Position.Right} id="out" style="background: #1dd1a1;" />
</div>
