// src/store.js

import { createStore } from 'redux';
import { UPDATE_MESSAGE } from './actions/messageActions';
import { INCREMENT } from './actions/incrementActions';
// import { DECREMENT } from './actions/messageActions';

// Initial state
const initialState = {
    count: 0,
    message: 'Hello Redux!'
};

// Reducer (optional for this case)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Add cases here if you plan to use reducers for other actions
        case UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case INCREMENT:
            return {
                ...state,
                count: action.payload
            };
        // case DECREMENT:
        //     return {
        //         ...state,
        //         count: count - 1
        //     };
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(reducer);

export default store;
