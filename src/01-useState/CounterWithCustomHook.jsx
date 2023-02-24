import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    const valueStep = 1;

    return (
        <>
            <h1>Counter { counter }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => increment(valueStep) }>+{ valueStep }</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(valueStep) }>-{ valueStep }</button>

        </>
    )
}
