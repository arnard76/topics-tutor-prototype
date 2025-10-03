<script>
	import { Handle, Position } from '@xyflow/svelte';
	let { id, data } = $props();

	// arc layout configuration
	const radius = 120; // distance from center
	const startAngle = -60; // degrees (top of arc)
	const endAngle = 60; // degrees (bottom of arc)

	// spread children evenly across arc
	let angleStep = $derived(
		data.children.length > 1 ? (endAngle - startAngle) / (data.children.length - 1) : 0
	);
</script>

<div
	class="rounded-full bg-black/25 bg-linear-90 px-16 py-4 font-friendly text-white shadow-2xl/20 inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm"
>
	<p>{data.label}</p>

	<!-- arc children -->
	{#each data.children as child, i}
		{@const angle = (startAngle + i * angleStep) * (Math.PI / 180)}
		{@const x = Math.cos(angle) * radius}
		{@const y = Math.sin(angle) * radius}
		<div
			class="absolute rounded-full bg-blue-600 px-3 py-1 text-sm whitespace-nowrap shadow-lg
             transition-transform hover:scale-110 hover:bg-blue-500"
			style="transform: translate({x}px, {y}px);"
		>
			{child}
		</div>
	{/each}

	<!-- Target handle (incoming connections) -->
	<Handle type="target" position={Position.Left} id="in" style="background: #ff6b6b;" />

	<!-- Source handle (outgoing connections) -->
	<Handle type="source" position={Position.Right} id="out" style="background: #1dd1a1;" />
</div>
