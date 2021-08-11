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
    await db.addCollections({
        message:{
            name: "messages",
            schema: schema,
        }
        
    })
    return db;
}
export default createDB;