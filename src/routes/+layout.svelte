<script lang="ts">
	import '../app.css';

	import { initializeFirebase } from '$lib/database/firebase';
	initializeFirebase();
	let { children } = $props();
</script>

<div class="bg-linear-to-r from-bg-1 to-bg-2">
	{@render children?.()}
</div>
