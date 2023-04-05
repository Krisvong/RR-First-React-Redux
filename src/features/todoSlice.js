import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the todo slice
const initialState = {
  items: []
}

// Create a todo slice using the createSlice function
export const todoSlice = createSlice({
  // Set the name of the slice to 'todos'
  name: 'todos',
  // Set the initial state of the slice
  initialState,
  // Define the reducers for the slice
  reducers: {
    // Define the addTodo reducer
    addTodo: (state, action) => {
      // Add the new todo item to the state's items array
      state.items.push(action.payload)
    },
    // Define the removeTodo reducer
    removeTodo: (state, action) => {
      // Remove the todo item with the specified ID from the state's items array
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    // Define the clearTodos reducer
    clearTodos: state => {
      // Clear all items from the state's items array
      state.items = []
    }
  }
})

// Extract the action creators from the slice
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions

// Export the reducer function from the slice
export default todoSlice.reducer

