import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const accumulate = (number: number):void => {
        setCount(count + number);
    }

    return (
        <>
            <h3>Counter: <small>{ count }</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => accumulate(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => accumulate(-1)}
            >
                -1
            </button>
        </>
    )
}
