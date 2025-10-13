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
	<div class="flex justify-end gap-4">
		{#if $chunkProgress < $readingMaterialChunks.length - 1}
			<button
				class="border-white text-nowrap"
				onclick={() => {
					chunkProgress.update((c) => c + 1);
					goto('/reading-material#chunk-' + ($chunkProgress - 1));
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
		color: gray;
	}
</style>
