import { configureStore } from '@reduxjs/toolkit'
import cartProductsSlice from './slices/cartProducts.slice'
import isLoadingSlice from './slices/isLoading.slice'
import productsSlice from './slices/products.slice'
import myPurchasesSlice from './slices/purchases.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        products: productsSlice,
        isLoading: isLoadingSlice,
        purchases: myPurchasesSlice,
        cartProducts: cartProductsSlice,
        userInfo: userSlice,
    }
})
