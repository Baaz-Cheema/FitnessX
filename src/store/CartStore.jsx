import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState: { products: [], cartIsOpen: false },
    reducers: {
        addItem(state, action) {
            let index = state.products.findIndex((a) => a.id === action.payload.id && a.size === action.payload.size)
            if (index === -1) {
                state.products.push({ ...action.payload, quantity: 1 }) //id same? change in cart? or change logic here? id same prouduct diff based on size???? will fix tmrrow
            } else {
                state.products[index].quantity++
            }
        },
        removeItem(state, action) {
            state.products = state.products.filter((a) => {
                if (a.id === action.payload.id) {
                    if (a.size !== action.payload.size) {//filter out item where size and id is the same, keep the rest
                        return a
                    }
                } else {
                    return a
                }
            })
        },
        showCart(state) {
            state.cartIsOpen = !state.cartIsOpen
        },
        updateValue(state, action) {
            if (!action.payload.quantity) {
                state.products = state.products.filter((a) => {
                    if (a.id === action.payload.item.id) {
                        if (a.size !== action.payload.item.size) {//filter out item where size and id is the same, keep the rest
                            return a
                        }
                    } else {
                        return a
                    }
                })
            } else {
                let index = state.products.findIndex((a) => a.id === action.payload.item.id && a.size === action.payload.item.size)
                state.products[index].quantity = action.payload.quantity
            }
        },
        emptyCart(state) {
            state.products = []
        }
    }
})

export const cartActions = cartSlice.actions
const store = configureStore({
    reducer: cartSlice.reducer
})
export default store