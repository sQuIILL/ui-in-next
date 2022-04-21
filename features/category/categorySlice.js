import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        add: (state, categories) => {
            state.categories = categories
        },
    },
})

export const { add } = categorySlice.actions

export default categorySlice.reducer