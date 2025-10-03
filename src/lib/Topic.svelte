<script lang="ts">
	import { Handle, Position } from '@xyflow/svelte';
	let { id, data } = $props();
</script>

<div
	class="rounded-full bg-black/25 bg-linear-90 px-16 py-4 font-friendly text-white shadow-2xl/20 inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm"
>
	<p>{data.label}</p>

	<!-- Target handle (incoming connections) -->
	<Handle type="target" position={Position.Left} id="in" style="background: #ff6b6b;" />

	<!-- Source handle (outgoing connections) -->
	<Handle type="source" position={Position.Right} id="out" style="background: #1dd1a1;" />
</div>
