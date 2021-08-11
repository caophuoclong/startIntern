import React, { useEffect } from 'react';
import ShowMessage from "./showResultMessage"
import * as Db from "../createDB";
function Message(props) {
    useEffect(() => {
        const connectDB = async () => {
            const db = await Db.get();

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