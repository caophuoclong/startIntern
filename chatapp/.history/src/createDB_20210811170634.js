import { addPouchPlugin, createRxDatabase, PouchDB } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));

addPouchPlugin(require('pouchdb-adapter-http')); // enable syncing over http (remote database)
const x = new PouchDB("chatapp",{adapter: 'idb'});
const createDb = async()=>{
    const xinchao = await createRxDatabase({
        name: 'chatapp',
        adapter: 'leveldown' // name of the adapter
      });
    const replicationState = xinchao.syncCouchDB({
        remote: 'http://127.0.0.1:5984/chatapp', // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
        waitForLeadership: true,              // (optional) [default=true] to save performance, the sync starts on leader-instance only
        direction: {                          // direction (optional) to specify sync-directions
            pull: true, // default=true
            push: true  // default=true
        },
        options: {                             // sync-options (optional) from https://pouchdb.com/api.html#replication
            live: true,
            retry: true
        },
    });
}

export default createDb;