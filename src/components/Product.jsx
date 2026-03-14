import '../css/products.css'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { AddProductsOpen, setShowAlert } from '../redux/slices/appSlice'
import { useNavigate } from 'react-router-dom'
function Product({ id, image, category, price, title, description }) {
    const blackMode = useSelector((store) => store.app.blackMode)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const BASEURL = "http://localhost:3000/";

    function ShowDetails() {
        console.log("show details")
        navigate(`/showdetails/${id}`)
    }

    async function AddToCard(e) {
        e.stopPropagation();
        await axios.post(`${BASEURL}products`, {
            "piece": 1,
            "category": category,
            "description": description || "",
            "price": price,
            "title": title,
            "image": image,
        })
        dispatch(AddProductsOpen());
        dispatch(setShowAlert(true));

        setTimeout(() => {
            dispatch(setShowAlert(false));
        }, 3000);
    }
    return (
        <div onClick={ShowDetails}
            className={`product-container-div ${blackMode ? 'dark' : ''}`}>
            <div><img src={image} alt="" /></div>
            <div className={`title-div ${blackMode ? 'dark' : ''}`}>{title}</div>
            <div className={`category-text ${blackMode ? 'dark' : ''}`}>{category}</div>
            <div className="price-text">{price} ₺</div>
            <div className="button-area"><button onClick={AddToCard}>Sepete Ekle</button></div>
        </div>
    )
}


export default Product