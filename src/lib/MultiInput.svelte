<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, fly, slide } from 'svelte/transition';
	// @ts-ignore
	import Artyom from 'artyom.js';

	let questionFromKeyboardInput = $state();
	let textInput = $state<HTMLInputElement>();

	$effect(() => {
		if (questionFromKeyboardInput === '' && textInput) textInput.blur();
	});

	const triggerPhrase = 'quick question';

	let listener = new Artyom(),
		active = $state(false),
		error = $state('');

	// Setup listener for trigger phrase
	// and when heard:

	listener.on([triggerPhrase]).then(async () => {
		console.log('said quick question');
	});

	$effect(() => {
		active ? startListening() : stopListening();
	});

	async function startListening() {
		try {
			await listener.initialize({
				lang: 'en-GB', // Great Britain english
				continuous: true, // Listen forever
				soundex: true, // Use the soundex algorithm to increase accuracy
				debug: true, // Show messages in the console
				// smart: true,
				// executionKeyword: "and do it now",
				listen: true // Start to listen commands !
			});
		} catch (e) {
			error = "Voice listener couldn't be initialized: " + e;
			return;
		}
	}

	function stopListening() {
		listener?.fatality();
		error = '';
	}

	setTimeout(() => {
		active = true;
	}, 5000);
</script>

<svelte:body
	onkeypresscapture={(e) => {
		if (questionFromKeyboardInput) return;
		if (textInput) textInput.focus();
	}}
/>

<div class="relative m-auto flex w-4/5 justify-center">
	<input
		type="text"
		class="flex h-64 w-full justify-between rounded-b-3xl bg-blue-300 p-4"
		bind:value={questionFromKeyboardInput}
		bind:this={textInput}
	/>
	{#if !questionFromKeyboardInput}
		<div
			transition:slide={{ duration: 350 }}
			class="absolute inset-x-8 inset-y-4 flex justify-between"
		>
			<div>
				<h2>Questions?</h2>

				<div>
					<!-- Suggestions -->
				</div>
			</div>

			<div class="text-hint-colour">
				<div class="hint">
					<Icon icon="tabler:keyboard" />
					<p>Type on keyboard</p>
				</div>
				<div class="hint">
					<Icon icon="tabler:ballpen" />
					<p>Write with pen</p>
				</div>

				<div class="hint">
					<Icon icon="tabler:microphone" />
					<p>Say 'quick question...'</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<p>{error}</p>

<style lang="postcss">
	@reference '../app.css';

	.hint {
		@apply flex text-2xl;
	}

	.hint :global(.iconify) {
		@apply w-12 text-4xl;
	}
</style>
