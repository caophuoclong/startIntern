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
        message:{
            name: "messages",
        schema: schema,
        }
        
    })
    myCollection.preInsert()
}
export default createDB;