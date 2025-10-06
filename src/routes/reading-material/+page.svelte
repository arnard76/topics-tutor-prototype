<script>
	import { readingMaterialChunks } from '$lib/reading/reading-material';

	let chunkProgress = $state(0);
</script>

<div class="flex h-screen w-screen flex-col bg-reading-bg">
	<div class="flex justify-end">
		<a href="/tutor" class="border-white text-nowrap">Ask questions</a>
	</div>
	<div class="flex h-full flex-1 flex-col gap-8 overflow-y-auto">
		{#each $readingMaterialChunks.slice(0, chunkProgress + 1) as readingChunk (readingChunk.id)}
			<div class="mx-auto w-[80%] text-2xl text-white">
				{readingChunk.content}
			</div>
		{/each}
	</div>
	<div class="flex justify-end">
		<button class="border-white text-nowrap" onclick={() => (chunkProgress += 1)}>Read more</button>
		<a class="border-white text-nowrap" href="/done">Finish Reading</a>
	</div>
</div>
