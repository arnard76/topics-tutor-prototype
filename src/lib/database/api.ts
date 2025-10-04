import { db } from '$lib/database/db';
import * as firebase from 'firebase/database';
import { get } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deleteUndefinedProperties(obj: any) {
	Object.keys(obj).forEach((key) => {
		if (obj[key] === undefined) delete obj[key];
	});

	return obj;
}

/**
 * This API can be used to interact with an entity which is stored within an Array on the firebase database
 */
export class EntityAPI<Entity> {
	entityIdProperty: keyof Entity;
	entityName: string;

	constructor(entityName: string, entityIdProperty: keyof Entity) {
		this.entityName = entityName;
		this.entityIdProperty = entityIdProperty;
	}

	/**
	 * @param path - if provided, it should start with a /
	 */
	entityRef(path = '', database = get(db)) {
		if (!database) return;

		return firebase.ref(database, `${this.entityName}${path}`);
	}

	updateFull(entity: Entity) {
		const entityRef = this.entityRef(`/${entity[this.entityIdProperty]}`);
		if (entityRef) firebase.set(entityRef, deleteUndefinedProperties(entity));
	}

	updatePartial(entityId: string, entityUpdates: Partial<Entity>) {
		const entityRef = this.entityRef(`/${entityId}`);
		if (entityRef) firebase.update(entityRef, deleteUndefinedProperties(entityUpdates));
	}

	add(entityAdd: Partial<Entity>) {
		const recordsRef = this.entityRef();
		if (!recordsRef) return;

		const newRecordRef = firebase.push(recordsRef);
		firebase.set(newRecordRef, deleteUndefinedProperties(entityAdd));
	}

	delete(id: string) {
		const deleteRef = this.entityRef(`/${id}`);
		if (deleteRef) firebase.remove(deleteRef);
	}
}
