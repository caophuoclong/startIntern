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
    const replicationState = xinchao.syncCouchDB({
        remote: 'http://localhost:10102/db/', // remote database. This can be the serverURL, another RxCollection or a PouchDB-instance
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