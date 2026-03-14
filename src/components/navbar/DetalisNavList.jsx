
import axios from 'axios'
import { RiMenu3Fill } from "react-icons/ri";
import DetailsNav from './DetailsNav';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/detailsNav.css'
import { setCartOpen } from '../../redux/slices/appSlice'
import React, { useEffect, useRef, useState } from 'react'


function DetalisNavList() {
    const BASEURL = "http://localhost:3000/";
    const addProducts = useSelector((store) => store.app.addProducts);
    const isCartOpen = useSelector((store) => store.app.isCartOpen);
    const dispatch = useDispatch();

    const [allProductsData, setAllProductsData] = useState([]);
    const listRef = useRef(null);

    async function allProducts() {
        const { data } = await axios.get(`${BASEURL}products`);
        setAllProductsData(data);
    }

    useEffect(() => {
        allProducts();
    }, [addProducts]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                isCartOpen &&
                listRef.current &&
                !listRef.current.contains(e.target)
            ) {
                dispatch(setCartOpen(false));
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () =>
            document.removeEventListener("click", handleClickOutside);
    }, [isCartOpen, dispatch]);

    return (
        <div className="nav-container-div-close">
            <div
                ref={listRef}
                className={`show-list ${isCartOpen ? 'showList' : ''}`}
            >
                <div className='nav-list-div'>
                    {allProductsData.map(product => (
                        <DetailsNav key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetalisNavList