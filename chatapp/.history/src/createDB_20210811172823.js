import { addPouchPlugin, createRxDatabase, PouchDB } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));
addPouchPlugin(require('pouchdb-adapter-leveldb'));
addPouchPlugin(require('pouchdb-adapter-http')); // enable syncing over http (remote database)
const createDb = async()=>{
    const chatapp = await createRxDatabase({
        name: 'chatapp',
        adapter: 'idb' // name of the adapter
    });
}

export default createDb;