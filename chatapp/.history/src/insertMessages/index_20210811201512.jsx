import * as Db from "../createDB";
import { toast } from 'react-toastify';
const insertMessage = async (message) => {
    const id = Date.now().toString();
    const data = { id, message: message };
    const database = await Db.get();
    try {
        await database.message.insert(data);

    } catch (error) {
        throw error;
    }
    return alert("Gui tin nhan thanh cong");

}
export default insertMessage;