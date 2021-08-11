import React from 'react';
import PropTypes from 'prop-types';
import "./index.css"
ShowMessage.propTypes = {

};

function ShowMessage(props) {
    const { messages } = props;
    return (
        <ul className="showMessage">
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