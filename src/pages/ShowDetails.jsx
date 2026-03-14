import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Button from '@mui/material/Button';
import { AddProductsOpen } from '../redux/slices/appSlice'
import Stack from '@mui/material/Stack';
import '../css/details.css'
import axios from 'axios'
import Alert from '@mui/material/Alert';
function ShowDetails() {

    const blackMode = useSelector((store) => store.app.blackMode)


    const [numberofAddedProducts, setNumberofAddedProducts] = useState(1)

    const { id } = useParams()
    const allProducts = useSelector((store) => store.products.products)
    const loading = useSelector((store) => store.products.loading)
    const [productDetails, setProductDetails] = useState(null)
    const dispatch = useDispatch()
    const [showAlert, setShowAlert] = useState(false)
    const BASEURL = "http://localhost:3001/";

    useEffect(() => {
        if (allProducts.length === 0) {
            dispatch(getAllProducts())
        }
    }, [dispatch])

    useEffect(() => {
        if (allProducts.length > 0) {
            const foundProduct = allProducts.find(
                (product) => String(product.id) === String(id)
            )
            setProductDetails(foundProduct)
        }
    }, [id, allProducts])


    if (!loading && allProducts.length > 0 && !productDetails) {
        return <div>Ürün bulunamadı</div>
    }

    async function AddToCard() {

        await axios.post(`${BASEURL}products`, {
            "piece": numberofAddedProducts,
            "category": productDetails.category,
            "description": productDetails.description,
            "price": productDetails.price,
            "title": productDetails.title,
            "image": productDetails.image,

        })
        dispatch(AddProductsOpen());




        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);




    }

    return (
        <div>


            <Alert
                className={`show-alert-succes ${showAlert ? "wakeup-alert-succes" : ""}`}
                severity="success"
            >
                Ürün Ekleme Başarılı.
            </Alert>



            {
                loading == false ?
                    <div className={`container-details-div ${blackMode ? 'dark' : ''}`}>
                        <img src={productDetails.image} width={200} />
                        <div>
                            <h2>{productDetails.title}</h2>
                            <p>{productDetails.description}</p>
                            <p>Fiyat: {productDetails.price} ₺</p>
                            <div className='button-div'>
                                <button onClick=

                                    {() => setNumberofAddedProducts(numberofAddedProducts + 1)} className='details-button'>+</button>
                                <h2>{numberofAddedProducts}</h2>
                                <button onClick=

                                    {() => {
                                        {
                                            if (numberofAddedProducts > 1) {

                                                setNumberofAddedProducts(numberofAddedProducts - 1)
                                            }
                                        }
                                    }
                                    }

                                    className='details-button'>-</button>
                            </div>
                            <div onClick={AddToCard} className='basket-div'>
                                <button >Sepete Ekle</button>
                            </div>
                        </div>

                    </div>
                    :

                    <Button
                        loading
                        loadingPosition="center"
                        variant="outlined"
                    />

            }
        </div>
    )
}

export default ShowDetails
