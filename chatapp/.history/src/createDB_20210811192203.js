import {
    createRxDatabase,
    addPouchPlugin,
    getRxStoragePouch
} from 'rxdb';
import {schema } from "./Schema"

addPouchPlugin(require('pouchdb-adapter-idb'));
const createDB = async()=>{
    const db = await createRxDatabase({
        name: "phuoclong",
        storage: getRxStoragePouch('idb'),
    })
    window['db'] = db;
    console.log(window);
    const myCollection = await db.addCollections({
        name: "messages",
        schema: schema,
    })
    console.log(myCollection);
}
export default createDB;