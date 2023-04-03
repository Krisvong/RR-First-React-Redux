import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearTodos: state => {
      state.items = []
    }
  }
})

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer
