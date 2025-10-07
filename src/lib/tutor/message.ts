import { EntityAPI } from '$lib/database/api';
import { createEntityStores } from '$lib/database/store';
import dayjs from 'dayjs';
import { derived } from 'svelte/store';

export type MessageType = {
	datetime: string;
	message: string;
	from: 'tutor' | 'student' | 'student-not-sent-yet';
	id?: string;
};

export class Message {
	datetime: string;
	message: string;
	from: 'tutor' | 'student' | 'student-not-sent-yet';
	id?: string;

	constructor(m: Message) {
		this.datetime = m.datetime;
		this.from = m.from;
		this.id = m.id;
		this.message = m.message;
	}
}

export const messagesApi = new EntityAPI<MessageType>('messages', 'id');
export const { loading: messagesLoading, records: messages } = createEntityStores(
	Message,
	messagesApi
);

export const studentDraftMessage = derived(messages, ($messages) =>
	$messages.find((m) => m.from === 'student-not-sent-yet')
);

export const chronologicalMessages = derived(messages, ($messages) =>
	$messages
		.filter((m) => m.from !== 'student-not-sent-yet')
		.sort((a, b) => (dayjs(a.datetime).isBefore(b.datetime) ? 1 : -1))
);
