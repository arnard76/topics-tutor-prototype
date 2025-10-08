<script>
	import { goto } from '$app/navigation';
	import { chunkProgress, readingMaterialChunks } from '$lib/reading/reading-material';
</script>

<div class="flex h-screen w-screen flex-col bg-reading-bg">
	<div class="flex justify-end">
		<a href="/tutor" class="border-white text-nowrap">Ask tutor</a>
	</div>
	<div class="flex h-full flex-1 flex-col gap-8 overflow-y-auto scroll-smooth">
		{#each $readingMaterialChunks.slice(0, $chunkProgress + 1) as readingChunk, i (readingChunk.id)}
			<div class="mx-auto w-[80%] text-2xl text-white" id="chunk-{i}">
				{readingChunk.content}
			</div>
		{/each}
	</div>
	<div class="flex justify-end">
		<button
			class="border-white text-nowrap"
			onclick={() => {
				chunkProgress.update((c) => c + 1);
				goto('/reading-material#chunk-' + ($chunkProgress - 1));
			}}>Read more</button
		>
		<a class="border-white text-nowrap" href="/done">Finish Reading</a>
	</div>
</div>

<style>
	a,
	button {
		color: darkslategray;
	}
</style>
