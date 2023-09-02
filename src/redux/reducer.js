
const defaultData = {
    products: [],
    cart: [],
    isLoading: false
}

export const reducer = (state = defaultData, action) => {

    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case 'PRODUCTS': {
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        }

        case 'ADD_TO_CART': {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.payload,
                        qty: 1
                    }
                ]
            }
        }

        case 'QUANTIY_CHANGE': {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id === action.payload.id ? item.qty += action.payload.value : item)
            }
        }
    }

    return state;
}

