<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, fly, slide } from 'svelte/transition';
	// @ts-ignore
	import Artyom from 'artyom.js';

	let { questionFromKeyboardInput = $bindable(''), onEnter, readonly = false } = $props();
	let textInput = $state<HTMLTextAreaElement>();

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
		// active ? startListening() : stopListening();
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
		console.log(e.key);
		if (questionFromKeyboardInput && e.key === 'Enter' && !readonly) {
			console.log({ questionFromKeyboardInput });
			onEnter(questionFromKeyboardInput);
			questionFromKeyboardInput = '';
		}

		if (questionFromKeyboardInput) return;
		if (textInput) textInput.focus();
	}}
/>

<div class="relative mx-auto mb-20 flex w-4/5 justify-end">
	<textarea
		class="multi-input flex w-full justify-between rounded-4xl bg-blue-300 p-4 transition-all duration-300 {questionFromKeyboardInput
			? 'min-h-0  text-lg'
			: 'min-h-32  text-6xl'}"
		bind:value={questionFromKeyboardInput}
		bind:this={textInput}
		disabled={readonly}
		placeholder="Questions?"
	></textarea>

	{#if !questionFromKeyboardInput}
		<div
			transition:slide={{ duration: 350 }}
			class="pointer-events-none absolute inset-x-8 inset-y-4 flex justify-between"
		>
			<div>
				<!-- Suggestions -->
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

<!-- <p>{error}</p> -->

<style lang="postcss">
	@reference '../app.css';

	.hint {
		@apply text-md flex items-center;
	}

	.hint :global(.iconify) {
		@apply text-md w-6;
	}
</style>
