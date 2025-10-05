<script>
	import { Handle, Position } from '@xyflow/svelte';
	import SubTopicSuggestions from '$lib/topics/SubTopicSuggestions.svelte';
	import { selectedTopic, selectTopic } from './selectedTopic';
	import Topic from './Topic.svelte';
	let { id, data: topic } = $props();
</script>

<div class="relative">
	<Topic {topic} />

	{#if $selectedTopic === topic.label}
		<div class="absolute top-1/2 right-12">
			<SubTopicSuggestions suggestions={topic.children} />
		</div>
	{/if}
</div>
