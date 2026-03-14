import React from 'react'
import axios from 'axios'
import '../../css/detailsNav.css'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { AddProductsOpen } from '../../redux/slices/appSlice'
function DetailsNav({ id, piece, image, category, price, title }) {
  const dispatch = useDispatch()
  const BASEURL = "http://localhost:3000/";
  async function DeleteProduct() {
    await axios.delete(`${BASEURL}products/${id}`)
    dispatch(AddProductsOpen());

  }


  return (


    <div className='detail-container-div'>

      <div><img className='details-image' src={image} alt="" /></div>
      <div className='detail-nav-container'>


        <div className='container-product-div'>


          <div> Adet Sayısı: {piece}</div>
          <div>{category}</div>
          <div className='price-div'>{price}</div>
          <div>{title}</div>

        </div>
        <div><AiFillDelete onClick={DeleteProduct} className='icon-delete' /></div>

      </div>
    </div>

  )
}

export default DetailsNav