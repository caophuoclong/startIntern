import * as Db from "../createDB";
const insertMessage = async (message) => {
    const id = Date.now().toString();
    const data = { id, message };
    const database = await Db.get();
    try {
        await database.message.insert(data);
        return alert("Gui tin nhan thanh cong");
    } catch (error) {
        return alert(error);
    }

}
export default insertMessage;