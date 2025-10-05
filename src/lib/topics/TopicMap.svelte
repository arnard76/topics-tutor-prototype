<script lang="ts">
	import { SvelteFlow, type Node } from '@xyflow/svelte';

	import '@xyflow/svelte/dist/style.css';
	import SelectedTopic from './TopicWithSuggestions.svelte';
	const nodeTypes = { selectableTopic: SelectedTopic };
	const startTopics: Node[] = [
		{ position: { x: -132.5, y: -87 }, data: { label: 'Computer Science' } },
		{
			position: { x: -68.15175759381454, y: -207.41778123280838 },
			data: { label: 'IoT/Internet' }
		},
		{
			position: { x: 113.58626265635758, y: -57.60093943569615 },
			data: {
				label: 'HCI',
				children: ['Multimodality', 'Graphic Design', 'Fitt’s Law', 'Cultural Design', 'Ethics']
			}
		},
		{ position: { x: -246.34020713597548, y: -130.0121818791241 }, data: { label: 'OOP' } },
		{
			position: { x: -338.629045544266, y: -56.18111115249167 },
			data: {
				label: 'Data Structures',
				children: ['Linked Lists', 'Hash Maps', 'Searching', 'Sorting']
			}
		}
	].map(
		(v, i) =>
			({
				...v,
				type: 'selectableTopic',
				id: i.toString(),
				sourceHandle: 'out',
				targetHandle: 'in'
			}) as Node
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

<SvelteFlow
	bind:nodes={topics}
	bind:edges
	style="background:none;"
	fitView
	{nodeTypes}
	nodesDraggable={false}
	proOptions={{ hideAttribution: true }}
/>
