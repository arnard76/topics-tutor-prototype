<script lang="ts">
	import { goto } from '$app/navigation';

	let { x, y, suggestion } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="absolute rounded-full bg-blue-600 px-3 py-1 font-friendly text-sm whitespace-nowrap text-white shadow-2xl/20 shadow-lg inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm
             transition-transform hover:scale-110 hover:bg-blue-500"
	onclick={() => goto(`/tutor?topic=${suggestion}`)}
	style="transform: translate({x}px, {y}px);"
>
	{suggestion}
</div>
