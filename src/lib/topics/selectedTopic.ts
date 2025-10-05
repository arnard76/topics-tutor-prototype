import { get, writable } from 'svelte/store';

export const selectedTopic = writable<null | string>(null);

export function isSelected(topicLabel: string) {
	return topicLabel === get(selectedTopic);
}

export function selectTopic(topicLabel: string) {
	if (isSelected(topicLabel)) return selectedTopic.set(null);

	selectedTopic.set(topicLabel);
}
