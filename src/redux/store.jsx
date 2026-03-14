import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/appSlice'
import productsSlice from './slices/productSlice'

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productsSlice,

    },
})

export default store