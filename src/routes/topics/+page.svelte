<script lang="ts">
	import TopicMap from '$lib/TopicMap.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="relative h-screen w-screen overflow-hidden">
	<div class="flex w-full justify-end">
		<a href="/tutor" class="left items-center gap-2 rounded-bl-2xl border-b-6 border-l-6">
			Tutor <Icon icon="tabler:arrow-right" class="translate-x-3.5 " />
		</a>
	</div>

	<TopicMap />
</div>
