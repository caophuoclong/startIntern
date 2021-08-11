import {
    createRxDatabase,
    addRxPlugin,
    addPouchPlugin,
    getRxStoragePouch
} from 'rxdb';


const createDB = async()=>{
    const db = createRxDatabase({
        name: "phuoclong",
        storage: getRxStoragePouch('idb'),
    })
}