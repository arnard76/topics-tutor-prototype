<script lang="ts">
	import { Handle, Position } from '@xyflow/svelte';
	let { id, data } = $props();
</script>

<div
	class="from-bg-gradient-to-r rounded-full bg-black/25 bg-linear-90 from-violet-600 to-indigo-600 px-16 py-4 backdrop-blur-sm"
>
	<strong>{data.label}</strong>

	<!-- Target handle (incoming connections) -->
	<Handle type="target" position={Position.Left} id="in" style="background: #ff6b6b;" />

	<!-- Source handle (outgoing connections) -->
	<Handle type="source" position={Position.Right} id="out" style="background: #1dd1a1;" />
</div>
