import {
    createRxDatabase,
    addPouchPlugin,
    getRxStoragePouch
} from 'rxdb';
import {schema } from "./Schema"
let dbPromise = null;
addPouchPlugin(require('pouchdb-adapter-idb'));
const createDB = async()=>{
    const db = await createRxDatabase({
        name: "phuoclong",
        storage: getRxStoragePouch('idb'),
    })
    const messageCollection = await db.addCollections({
        message:{
            name: "messages",
            schema: schema,
        }
        
    })
    messageCollection.sync(remote: 'http://localhost:5984/phuoclong' );
    return db;
}

export const get = () => {
    if (!dbPromise)
        dbPromise = createDB();
    return dbPromise;
};