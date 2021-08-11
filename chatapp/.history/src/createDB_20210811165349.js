import { addPouchPlugin, createRxDatabase } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));
const createDb = async()=>{
    const db = await createRxDatabase({
        name: 'mydatabase',
        adapter: 'idb' // name of the adapter
      });
    console.dir(db);
}

export default createDb;