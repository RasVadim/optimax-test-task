export const SET_TO_CART = "SET_TO_CART";
export const SET_TO_RECOMMENDED = "SET_TO_RECOMMENDED";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const FETCH_CART = "FETCH_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const IS_CART_LOADING = "IS_CART_LOADING";
export const IS_RECOMMENDED_LOADING = "IS_RECOMMENDED_LOADING";

export const fetchCart = () => ({
    type: FETCH_CART,
});

export const isCartLoading = (payload: boolean) => ({
    type: IS_CART_LOADING,
    payload,
});

export const isRecommendedLoading = (payload: boolean) => ({
    type: IS_RECOMMENDED_LOADING,
    payload,
});

export const setToCart = (payload: any[]) => ({
    type: SET_TO_CART,
    payload,
});

export const setToRecommended = (payload: any[]) => ({
    type: SET_TO_RECOMMENDED,
    payload,
});

export const changeQuantity = (payload: any) => ({
    type: CHANGE_QUANTITY,
    payload,
});

export const addToCart = (payload: any) => ({
    type: ADD_TO_CART,
    payload,
});

export const deleteFromCart = (payload: any) => ({
    type: DELETE_FROM_CART,
    payload,
});
