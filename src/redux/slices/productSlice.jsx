import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products: [],
    selectedProduct: {},
    loading: true,
    error: null
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/products')
        return response.data
    } catch (error) {
        return rejectWithValue(error.message || 'Ürünler yüklenirken bir hata oluştu.')
    }
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
            state.error = null
            console.log("fulfilled mode")
        })
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
            state.error = null
            console.log("pending mode")
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || action.error.message
            console.log("rejected mode", state.error)
        })
    }
})

export const { } = productsSlice.actions
export default productsSlice.reducer