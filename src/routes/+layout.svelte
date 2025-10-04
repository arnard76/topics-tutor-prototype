<script lang="ts">
	import { initializeFirebase } from '$lib/database/firebase';
	import '../app.css';

	let { children } = $props();

	initializeFirebase();
</script>

<div class="bg-linear-to-r from-bg-1 to-bg-2">
	{@render children?.()}
</div>
