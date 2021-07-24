import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,

    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)

            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity = existingItem.quantity+1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state,action) {
            const itemId = action.payload

            const existingItem = state.items.find(item => item.id === itemId)

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== itemId)
            } 
            else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
         }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice