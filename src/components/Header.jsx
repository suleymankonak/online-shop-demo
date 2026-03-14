import React from 'react'
import '../css/header.css'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { modeChange, setSearchTerm, toggleCart } from '../redux/slices/appSlice'
import { useSelector } from 'react-redux'
function Header() {
    const [check, setCheck] = useState(true)
    const blackMode = useSelector((store) => store.app.blackMode)
    const dispatch = useDispatch();




    useEffect(() => {

        dispatch(modeChange(check))
    }, [check])

    // JSX KODLARI
    return (
        <div className={`container-div ${blackMode ? 'dark' : ''}`}>

            <div className="container-div-left">
                <div className='myProfile-div'></div>
                <div><h3>Süleyman Konak</h3></div>
            </div>

            <div className='container-div-right'>
                <input
                    type="text"
                    placeholder='Ürün Arayınız.'
                    className={`product-input ${blackMode ? 'dark' : ''}`}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value.toLowerCase()))}
                />
                <div>
                    {check ?
                        <MdOutlineWbSunny className='icon' onClick={() => setCheck(false)}

                        />
                        :
                        <FaRegMoon className='icon' onClick={() => setCheck(true)} />

                    }

                </div>
                <div>
                    <FaStoreAlt className='icon' onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleCart());
                    }} />
                </div>
            </div>

        </div>


    )

}

export default Header