import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import '../css/products.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Button from '@mui/material/Button';
function ProductsList() {
    const blackMode = useSelector((store) => store.app.blackMode)

    const [allProducts, setAllProducts] = useState([])

    const dispatch = useDispatch()


    const allUsers = useSelector((store) => store.products.products)
    const searchTerm = useSelector((store) => store.app.searchTerm)
    const loading = useSelector((store) => store.products.loading)

    const filteredProducts = allUsers.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    )

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])



    return (
        <div>

            <div className={`products-container-div ${blackMode ? 'dark' : ''}`}>
                {
                    loading == false ?
                        <div className={`products-div-row ${blackMode ? 'dark' : ''}`}>
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