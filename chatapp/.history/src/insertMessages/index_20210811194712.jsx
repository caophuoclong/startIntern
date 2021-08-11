import Db from "../createDB";
const insertMessage = async (message) => {
    const id = Date.now().toString();
    const data = { id, message };
    try {
        await Db.message.insert(data);
    } catch (error) {
        return alert("Loi: ", error);
    }
    return alert("Gui tin nhan thanh cong");
}