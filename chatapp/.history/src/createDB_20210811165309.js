import { addRxPlugin, createRxDatabase } from "rxdb";

addRxPlugin(require('pouchdb-adapter-idb'));

const createDb = async()=>{
    const db = await createRxDatabase({
        name: "chatapp",
        adapter: "idb",
        password: "a516489C@k"
    })
    console.dir(db);
}

export default createDb;