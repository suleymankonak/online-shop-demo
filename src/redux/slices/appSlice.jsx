import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blackMode: false,
    numberOfTheProducts: 0,
    priceAllProducts: 0, //Ürünlerin kapladığı toplam alan
    addProducts: false, //Productun anında görüntülenmesi için 
    searchTerm: '', // Arama kelimesi için state
    isCartOpen: false, // Sepet panelinin açık/kapalı durumu
    showAlert: false, // Ürün eklendiğinde başarı mesajı flagi
}

export const appSlice = createSlice({
    name: "App",
    initialState,
    reducers: {
        modeChange: (state, action) => {

            state.blackMode = action.payload

        },
        NumberOfProducts: (state, action) => {
            state.numberOfTheProducts
        },
        PriceAllProducts: (state, action) => {
            state.numberOfTheProducts
        }
        ,
        AddProductsOpen: (state) => {
            state.addProducts = !(state.addProducts)
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        setCartOpen: (state, action) => {
            state.isCartOpen = action.payload;
        },
        setShowAlert: (state, action) => {
            state.showAlert = action.payload;
        }
    },
    extraReducers: (builder) => {


    }
})

export const { modeChange, AddProductsOpen, setSearchTerm, toggleCart, setCartOpen, setShowAlert } = appSlice.actions
export default appSlice.reducer