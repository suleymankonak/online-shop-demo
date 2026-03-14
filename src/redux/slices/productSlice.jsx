import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    selectedProduct: {},
    loading: true
}

// İlk parametre olarak action type string'i eklenmeli
export const getAllProducts = createAsyncThunk('user', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const productsSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
            console.log("fulfilled mode")
        })
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
            console.log("pending mode")
        })
        // Hata durumu için de bir case eklemek iyi olur
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false
            console.log("rejected mode", action.error)
        })
    }
})

export const { } = productsSlice.actions
export default productsSlice.reducer