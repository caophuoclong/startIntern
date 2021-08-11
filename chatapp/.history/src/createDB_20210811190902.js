import {
    createRxDatabase,
    addRxPlugin,
    addPouchPlugin,
    getRxStoragePouch
} from 'rxdb';

addPouchPlugin(require('pouchdb-adapter-idb'));
const createDB = async()=>{
    const db = createRxDatabase({
        name: "phuoclong",
        storage: getRxStoragePouch('idb'),
    })
    console.log(window);
//     db.waitForLeadership().then(() => {
//         document.title = '♛ ' + document.title;
//       });
// }
export default createDB;