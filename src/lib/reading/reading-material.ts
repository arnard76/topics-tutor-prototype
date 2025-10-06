import { EntityAPI } from '$lib/database/api';
import { createEntityStores } from '$lib/database/store';

export type ReadingMaterialChunkType = { id: string; content: string };

export class ReadingMaterialChunk {
	content: string;
	id: string;

	constructor(m: ReadingMaterialChunkType) {
		this.content = m.content;
		this.id = m.id;
	}
}

export const readingMaterialApi = new EntityAPI<ReadingMaterialChunkType>('reading-chunks', 'id');
export const { loading: readingMaterialLoading, records: readingMaterialChunks } =
	createEntityStores(ReadingMaterialChunk, readingMaterialApi);
