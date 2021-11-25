import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
    const { count, accumulate } = useCounter(100);
    return (
        <>
            <h3>Counter Hook: <small>{ count }</small></h3>
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
