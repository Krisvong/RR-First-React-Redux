import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodos } from './features/todoSlice'

function Todo() {
    // Access the items array from the todo slice using the useSelector hook
    const items = useSelector((state) => state.todo.items)
    // Access the dispatch function using the useDispatch hook
    const dispatch = useDispatch()
    // Define a local state for the input value
    const [input, setInput] = useState('')

    let renderItems = null
    // If there are items in the array, render each item as a li element
    if (items && items.length > 0) {
        renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>)
    }

    // Define a function to handle form submission
    const submitForm = (e) => {
        e.preventDefault()
        // Dispatch the addTodo action with the input value as the payload
        dispatch(addTodo(input))
        // Reset the input state to an empty string
        setInput('')
    }

    // Define a function to handle the clear button click
    const handleClear = () => {
        // Dispatch the clearTodos action
        dispatch(clearTodos())
        // Reset the input state to an empty string
        setInput('')
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

// Export the Todo component as the default export of the module
export default Todo
