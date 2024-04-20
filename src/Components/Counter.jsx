
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/incrementActions';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(count));
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;