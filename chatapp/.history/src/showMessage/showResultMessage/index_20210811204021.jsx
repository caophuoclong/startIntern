import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
ShowMessage.propTypes = {

};

function ShowMessage(props) {
    const { messages } = props;
    useEffect(() => {

        const element = document.getElementById('messages');
        element.scrollTop = element.scrollHeight;

    }, [messages])
    return (
        <ul className="showMessage" id="messages">
            {
                messages.map((value, pos) => (
                    <li>
                        <span>{value.id}</span>
                        <p>{value.message}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default ShowMessage;