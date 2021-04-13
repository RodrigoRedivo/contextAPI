import React, { useState } from 'react';

function Counter(props) {
    
    const [counter, setCounter] = useState(0);
    
    return(
        <div>
            <div>{counter}</div>
            <button onClick={() => {setCounter(num => num - 1)}}>-</button>
            <button onClick={() => {setCounter(num => num + 1)}}>+</button>
        </div>
    );
}

export default Counter;