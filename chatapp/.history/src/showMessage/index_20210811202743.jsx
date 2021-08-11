import React, { useEffect } from 'react';
import ShowMessage from "./showResultMessage"
import * as Db from "../createDB";
function Message(props) {
    useEffect(() => {

    }, [])
    return (
        <div>
            <ShowMessage />
        </div>
    );
}

export default Message;