import { addPouchPlugin, createRxDatabase, PouchDB } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));
addPouchPlugin(require('pouchdb-adapter-leveldb'));
addPouchPlugin(require('pouchdb-adapter-http')); // enable syncing over http (remote database)
const createDb = async()=>{
    const db = await createRxDatabase({
        name: 'heroesdb',           // <- name
        adapter: 'idb',          // <- storage-adapter
        password: 'myPassword',     // <- password (optional)
        multiInstance: true,         // <- multiInstance (optional, default: true)
        eventReduce: false // <- eventReduce (optional, default: true)
      });
      console.dir(db);
}

export default createDb;