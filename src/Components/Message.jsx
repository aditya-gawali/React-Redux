// src/components/Message.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessage } from '../actions/messageActions';


const Message = () => {
    const message = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleUpdateMessage = () => {
        dispatch(updateMessage('New Message')); // Dispatch the updateMessage action
    };


    // const updateMessage = () => {
    //     dispatch({ type: 'UPDATE_MESSAGE', payload: 'New Message' });
    // };

    return (
        <div>
            <h2>Message</h2>
            <p>{message}</p>
            <button onClick={handleUpdateMessage}>Update Message</button>
        </div>
    );
};

export default Message;