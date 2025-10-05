<script lang="ts">
	import SubTopicSuggestion from './SubTopicSuggestion.svelte';

	let { suggestions } = $props();

	// arc layout configuration
	const radius = 120; // distance from center
	const startAngle = -60; // degrees (top of arc)
	const endAngle = 60; // degrees (bottom of arc)

	// spread children evenly across arc
	let angleStep = $derived(
		suggestions.length > 1 ? (endAngle - startAngle) / (suggestions.length - 1) : 0
	);
</script>

{#each suggestions as suggestion, i}
	{@const angle = (startAngle + i * angleStep) * (Math.PI / 180)}
	{@const x = Math.cos(angle) * radius}
	{@const y = Math.sin(angle) * radius}
	<SubTopicSuggestion {suggestion} {x} {y} />
{/each}
