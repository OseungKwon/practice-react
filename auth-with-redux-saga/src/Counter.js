import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <span>{count}</span>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>

        </div>
    )
}

export default Counter
