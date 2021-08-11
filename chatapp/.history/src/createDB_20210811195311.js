import {
    createRxDatabase,
    addPouchPlugin,
    getRxStoragePouch
} from 'rxdb';
import {schema } from "./Schema"
const dbPromise = null;
addPouchPlugin(require('pouchdb-adapter-idb'));
const createDB = async()=>{
    const db = await createRxDatabase({
        name: "phuoclong",
        storage: getRxStoragePouch('idb'),
    })
    await db.addCollections({
        message:{
            name: "messages",
            schema: schema,
        }
        
    })
    return db;
}

export const get = () => {
    if (!dbPromise)
        dbPromise = createDB();
    return dbPromise;
};