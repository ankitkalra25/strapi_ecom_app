import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item){
                 item.quantity+= action.payload.quantity;
            }else{
                state.products.push(action.payload)
            }
        },
        addQuantity: (state, action) => {
            const item = state.products.find((item)=>item.id===action.payload.id)
            console.log(item)
            if(item){
                 item.quantity+= action.payload.quantity;
            }
        },
        removeQuantity: (state, action) => {
            const item = state.products.find((item)=>item.id===action.payload.id)
            if(item.quantity==1){
                console.log(item)
                item.quantity= action.payload.quantity;
            }else{
                item.quantity-= action.payload.quantity;
            }
        },
        removeItem: (state,action) => {
            state.products=state.products.filter(item=>item.id !== action.payload)
        },
        resetCart: (state) => {
            state.products =[]
        }
    }
})
export const {addToCart, addQuantity, removeQuantity, removeItem, resetCart} = cartSlice.actions
export default cartSlice.reducer