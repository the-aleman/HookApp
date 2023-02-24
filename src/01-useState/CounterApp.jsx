import { useState } from "react"

export const CounterApp = () => {

    const [stateCount, setStateCount] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30
        }
    )

    return (
        <>
            <h1>Counter: { stateCount.counter1 } </h1>
            <h1>Counter: { stateCount.counter2 } </h1>
            <h1>Counter: { stateCount.counter3 } </h1>
            <hr />
            <button
                className="btn"
                onClick={ () => setStateCount({
                    ...stateCount,
                    counter1: stateCount.counter1 + 1
                }) }
                >
                    +1
            </button>
        </>
    )
}
