import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodos } from './features/todoSlice'

function Todo() {
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    let renderItems = null
    if (items && items.length > 0) {
        renderItems = items.map((item, index) => <li key={index} onClick={() => dispatch(removeTodo(index))}>{item}</li>)
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('') // Reset input state to empty string after adding a new item
    }

    const handleClear = () => {
        dispatch(clearTodos())
        setInput('') // Reset input state to empty string after clearing the list
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

export default Todo

