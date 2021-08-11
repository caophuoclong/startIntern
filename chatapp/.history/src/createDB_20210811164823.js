import { createRxDatabase } from "rxdb";

const createDb = async()=>{
    const db = await createRxDatabase({
        name: "chatapp",
        adapter: "idb",
        password: "516489"
    })
}

export default createDb;