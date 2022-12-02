import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';


export const userSlice = createSlice({
    name: 'userInfo',
    initialState: {},
    reducers: {
        setUserInfo: (state, action) => {
            return action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;


export const loginUserThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('userName', `${res.data.data.user.firstName} ${res.data.data.user.lastName}`)
        })
        .catch(error => {
            if (error.response.status === 404) {
                alert('Credenciales incorrectas')
            } else {
                console.log(error.response.data);
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const signUpThunk = (data) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/users', data)
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
}