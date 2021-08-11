import { addPouchPlugin, createRxDatabase, PouchDB } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));
addPouchPlugin(require('pouchdb-adapter-http')); // enable syncing over http (remote database)

const createDb = async()=>{
    const db = new PouchDB('chatapp',{adapter: "idb"});
    const xinchao = await createRxDatabase({
        name: 'chatapp',
        adapter: 'idb' // name of the adapter
      });
    console.dir(db);
}

export default createDb;