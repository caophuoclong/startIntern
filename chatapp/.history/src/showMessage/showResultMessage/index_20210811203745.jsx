import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
ShowMessage.propTypes = {

};

function ShowMessage(props) {
    const { messages } = props;
    useEffect(() => {
        const interval = setInterval(() => {

        })
        return () => {
            interval.clearInterval();
        }
    }, [])
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