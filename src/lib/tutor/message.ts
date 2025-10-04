import { EntityAPI } from '$lib/database/api';
import { createEntityStores } from '$lib/database/store';

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
