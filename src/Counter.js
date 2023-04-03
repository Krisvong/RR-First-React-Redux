import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
  // Use the useSelector hook to get the current value of the counter state variable from the store
  const count = useSelector((state) => state.counter.value)
  // Use the useDispatch hook to get a reference to the store's dispatch function
  const dispatch = useDispatch()
  // Set up local state to keep track of the input value for incrementing by a specific amount
  const [input, setInput] = useState(0)

  // Event handler for submitting the form to increment the counter by a specific amount
  const byAmount = (e) => {
    e.preventDefault()
    // Dispatch the incrementByAmount action creator with the parsed input value as the payload
    dispatch(incrementByAmount(Number(input)))
  }

  // Render the component
  return (
    <div>
      <h1>{count}</h1>
      {/* Button to dispatch the increment action */}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}>
        Increment
      </button>
      {/* Button to dispatch the decrement action */}
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      {/* Form to submit a specific amount to increment the counter by */}
      <form onSubmit={(e) => byAmount(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Counter

