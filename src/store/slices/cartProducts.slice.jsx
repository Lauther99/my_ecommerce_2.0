import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartProductsSlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
        setCartProducts: (state, action) => {
            return action.payload
        }
    }
})

export const { setCartProducts } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;

export const getCartProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCartProducts(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}