import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';

function Header(props) {
    const [counter] = useContext(CounterContext)
    return(
        <div className="header">
            <h1>Counter</h1>
            <div>{counter}</div>
        </div>
    );
}

export default Header;