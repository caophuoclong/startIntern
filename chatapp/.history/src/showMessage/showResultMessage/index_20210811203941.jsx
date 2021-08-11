import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
ShowMessage.propTypes = {

};

function ShowMessage(props) {
    const { messages } = props;
    useEffect(() => {
        const interval = setInterval(() => {
            const element = document.getElementById('messages');
            element.scrollTop = element.scrollHeight;
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])
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