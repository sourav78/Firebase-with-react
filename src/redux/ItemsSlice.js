import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const itemsSlice = createSlice({
    name: "item",
    initialState,
    reducers: {

        addItems: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { addItems } = itemsSlice.actions
export default itemsSlice.reducer