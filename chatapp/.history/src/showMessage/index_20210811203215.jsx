import React, { useEffect, useState } from 'react';
import ShowMessage from "./showResultMessage"
import * as Db from "../createDB";
function Message(props) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const connectDB = async () => {
            const db = await Db.get();
            const sub = db.Message.find().sort({ id: 1 }).$.subscribe(messages => {
                if (!messages) return;

            })
        }
        connectDB();

    }, [])
    return (
        <div>
            <ShowMessage />
        </div>
    );
}

export default Message;