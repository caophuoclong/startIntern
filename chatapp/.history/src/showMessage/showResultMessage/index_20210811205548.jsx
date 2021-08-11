import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import moment from 'moment';
ShowMessage.propTypes = {

};

function ShowMessage(props) {
    const { messages } = props;
    useEffect(() => {

        const element = document.getElementById('messages');
        element.scrollTop = element.scrollHeight;

    }, [messages])
    return (
        <ul className="showMessages" id="messages">
            {
                messages.map((value, pos) => (
                    <li className="item">
                        <p className="message" >{value.message}</p>
                        <span className="id">{moment(value.id, 'x').fromNow()}</span>

                    </li>
                ))
            }
        </ul>
    );
}

export default ShowMessage;