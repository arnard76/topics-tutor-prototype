<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>

<div class="bg-linear-to-r from-bg-1 to-bg-2">
	{@render children?.()}
</div>
