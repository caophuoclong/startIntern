import { addPouchPlugin, createRxDatabase, PouchDB } from "rxdb";

addPouchPlugin(require('pouchdb-adapter-idb'));
const createDb = async()=>{
    const db = new PouchDB('chatapp',{adapter: "idb"});
    const xinchao = await createRxDatabase({
        name: 'caophuoclong',
        adapter: 'idb' // name of the adapter
      });
    console.dir(db);
}

export default createDb;