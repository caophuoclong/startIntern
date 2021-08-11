import * as Db from "../createDB";
import { toast } from 'react-toastify';
const notify = () => {
    toast('🦄 Gui tin nhan thanh cong', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    toast.success();
}
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