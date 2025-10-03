<script lang="ts">
	import Topic from '$lib/Topic.svelte';
	import { SvelteFlow, type Node } from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	const nodeTypes = { topic: Topic };
	const startTopics: Node[] = [
		{ position: { x: 0, y: 0 }, data: { label: 'Computer Science' } },
		{ position: { x: 0, y: 100 }, data: { label: 'IoT/Internet' } },
		{ position: { x: 0, y: 100 }, data: { label: 'HCI' } },
		{ position: { x: 0, y: 100 }, data: { label: 'OOP' } },
		{ position: { x: 0, y: 100 }, data: { label: 'Data Structures' } }
	].map(
		(v, i) =>
			({ ...v, type: 'topic', id: i.toString(), sourceHandle: 'out', targetHandle: 'in' }) as Node
	);

	const startEdges = [
		{ source: '0', target: '1' },
		{ source: '0', target: '2' },
		{ source: '0', target: '3' },
		{ source: '0', target: '4' }
	].map((v, i) => ({ ...v, id: 'e' + i.toString(), type: 'smoothstep' }));

	let topics = $state.raw(startTopics);

	let edges = $state.raw(startEdges);
</script>

<div style:width="100vw" style:height="100vh">
	<SvelteFlow bind:nodes={topics} bind:edges fitView {nodeTypes} />
</div>
