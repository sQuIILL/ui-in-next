import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    value: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const itemExists = state.products.find((item) => item.name === action.payload.name);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        addSomeQuantity: (state, action) => {
            const itemExists = state.products.find((item) => item.name === action.payload.name);
            if (itemExists) {
                itemExists.quantity+= action.payload.quantity
            } else {
                state.products.push({ ...action.payload});
            }
        },
        incrementQuantity: (state, action) => {
            const itemExists = state.products.find((item) => item.name === action.payload);
            itemExists.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item.name === action.payload);
            if (item.quantity === 1) {
                const index = state.products.findIndex((item) => item.name === action.payload);
                state.products.splice(index, 1);
            } else {
                item.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.products.findIndex((item) => item.name === action.payload);
            state.products.splice(index, 1);
        },
    },
})

// Action creators are generated for each case reducer function
export const { add,incrementQuantity,decrementQuantity, removeFromCart,addSomeQuantity } = cartSlice.actions

export default cartSlice.reducer