import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        cart: [],
        isLoading: false
    },
    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        getProductsFailure: (state) => {
            state.isLoading = false;
        },
        addProductToCart: (state, action) => {
            state.cart = [
                ...state.cart,
                {
                    ...action.payload,
                    qty: 1
                }
            ]
        },
        changeQtyHandler: (state, action) => {
            state.cart = state.cart.filter((item) => {
                return item.id === action.payload.id ? item.qty += action.payload.value : item;
            })
        }
    }
});

export const { getProductsFetch, getProductsSuccess, addProductToCart, changeQtyHandler, getProductsFailure } = productsSlice.actions;

export default productsSlice.reducer;