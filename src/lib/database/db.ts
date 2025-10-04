import { derived } from 'svelte/store';
import { Database, getDatabase } from 'firebase/database';
import { app } from '$lib/database/firebase';

export const db = derived<typeof app, Database | undefined>(app, (app, setDb) => {
	if (!app) return setDb(undefined);

	const database = getDatabase(app);

	// if (env.ENV === 'test' && env.FIREBASE_DATABASE_EMULATOR_HOST) {
	// 	const [host, port] = env.FIREBASE_DATABASE_EMULATOR_HOST.split(':');
	// 	try {
	// 		connectDatabaseEmulator(database, host, parseInt(port));
	// 	} catch (e) {
	// 		console.info(e);
	// 	}
	// }

	setDb(database);
});
