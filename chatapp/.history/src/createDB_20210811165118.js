import { createRxDatabase } from "rxdb";

const createDb = async()=>{
    const db = await createRxDatabase({
        name: "chatapp",
        adapter: "idb",
        password: "a516489C@k"
    })
    console.dir(db);
}

export default createDb;