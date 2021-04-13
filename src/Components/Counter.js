import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';

function Counter(props) {

    const [counter, setCounter] = useContext(CounterContext);
    
    return(
        <div className="counter">
            <div>{counter}</div>
            <button className="neg" onClick={() => {setCounter(num => num - 1)}}>-</button>
            <button className="pos" onClick={() => {setCounter(num => num + 1)}}>+</button>
        </div>
    );
}

export default Counter;