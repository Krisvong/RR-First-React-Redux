import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the counter slice
const initialState = {
    value: 0
}

// Create a counter slice using the createSlice function
export const counterSlice = createSlice({
    // Set the name of the slice to 'counter'
    name: 'counter',
    // Set the initial state of the slice
    initialState,
    // Define the reducers for the slice
    reducers: {
        // Define the increment reducer
        increment: (state) => {
            // Return a new state object with the value property incremented by 1
            return { value: state.value + 1 }
        },
        // Define the decrement reducer
        decrement: (state) => {
            // Return a new state object with the value property decremented by 1
            return { value: state.value - 1 }
        },
        // Define the incrementByAmount reducer
        incrementByAmount: (state, action) => {
            // Return a new state object with the value property incremented by the payload amount
            return { value: state.value + action.payload }
        }
    }
})

// Extract the action creators from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer function from the slice
export default counterSlice.reducer




