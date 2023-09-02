import { fetchProducts } from "../api/products";

export const loadingHandler = (value) => (dispatch) => {
    return dispatch({
        type: 'LOADING',
        payload: value
    })
}

export const getProducts = () => async (dispatch, getState) => {
    const { products } = getState();
    if(!products[0]){
        dispatch(loadingHandler(true));
        let products = await fetchProducts();
        dispatch({
            type: 'PRODUCTS',
            payload: products
        })
    }
}

export const addToCartHandler = (payload) => (dispatch) => {
    return dispatch({
        type: 'ADD_TO_CART',
        payload
    })
}

export const quantityChangeHandler = (value, id) => (dispatch) => {
    return dispatch({
        type: "QUANTIY_CHANGE",
        payload: {
            value, id
        }
    })
}