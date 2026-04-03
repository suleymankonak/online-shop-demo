import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import '../css/products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function ProductsList() {
    const blackMode = useSelector((store) => store.app.blackMode)

    const [allProducts, setAllProducts] = useState([])

    const dispatch = useDispatch()


    const allUsers = useSelector((store) => store.products.products)
    const searchTerm = useSelector((store) => store.app.searchTerm)
    const loading = useSelector((store) => store.products.loading)
    const error = useSelector((store) => store.products.error)

    const filteredProducts = allUsers.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    )

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])



    return (
        <div>
            {error && (
                <Alert severity="error" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                    {error}
                </Alert>
            )}

            <div className={`products-container-div ${blackMode ? 'dark' : ''}`}>
                {
                    loading == false ?
                        <div className={`products-div-row ${blackMode ? 'dark' : ''}`}>
                            {
                                filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                id={product.id}
                                                category={product.category}
                                                description={product.description}
                                                price={product.price}
                                                title={product.title}
                                                image={product.image}
                                            />
                                        )
                                    })
                                ) : (
                                    !error && !loading && <div style={{ fontSize: '20px', textAlign: 'center', width: '100%' }}>Aradığınız kriterlere uygun ürün bulunamadı.</div>
                                )
                            }

                        </div>
                        :
                        <div>
                            <Button
                                loading
                                loadingPosition="center"
                                variant="outlined"></Button>

                        </div>


                }


            </div>
            {
                loading == false
                    ?
                    <div className={`products-div-column ${blackMode ? 'dark' : ''}`}>
                        {
                            filteredProducts.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        id={product.id}
                                        category={product.category}
                                        description={product.description}
                                        price={product.price}
                                        title={product.title}
                                        image={product.image}
                                    />
                                )
                            })
                        }
                    </div>
                    :
                    <div>
                        <Button
                            loading
                            loadingPosition="center"
                            variant="outlined"></Button>

                    </div>
            }
        </div>

    )
}

export default ProductsList
