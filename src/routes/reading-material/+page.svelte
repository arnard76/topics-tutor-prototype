<script>
	import { goto } from '$app/navigation';
	import { marked } from 'marked';
	import { chunkProgress, readingMaterialChunks } from '$lib/reading/reading-material';
</script>

<div class="flex h-screen w-screen flex-col bg-reading-bg pt-8">
	<div class="flex h-full flex-1 flex-col gap-10 overflow-y-auto scroll-smooth whitespace-pre-wrap">
		{#each $readingMaterialChunks.slice(0, $chunkProgress + 1) as readingChunk, i (readingChunk.id)}
			<div class="mx-auto w-[80%] text-xl whitespace-pre-wrap text-white" id="chunk-{i}">
				{@html marked(readingChunk.content)}
			</div>
		{/each}
	</div>
	<div
		class="m-auto mb-4 flex w-min justify-start gap-3 overflow-hidden rounded-full border-2 border-gray-300"
	>
		{#if $chunkProgress < $readingMaterialChunks.length - 1}
			<button
				class="border-white text-nowrap"
				onclick={() => {
					chunkProgress.update((c) => c + 1);
					goto('/reading-material#chunk-' + $chunkProgress);
				}}>Read more</button
			>
		{/if}
		<a href="/tutor" class="border-white text-nowrap">Ask tutor</a>
		<a class="border-white text-nowrap" href="/done">Finish reading</a>
	</div>
</div>

<style>
	a,
	button {
		color: rgb(219, 219, 219);
		border-width: 0;
		background: transparent;
		font-size: 12px;
		padding-left: 1rem;
		padding-right: 1rem;
		transition: 200ms ease all;
	}

	a:hover,
	button:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>
