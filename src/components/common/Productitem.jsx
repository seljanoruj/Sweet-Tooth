import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart'
import addWishlist from "../../store/actions/AddWishlist"

const Productitem = ({ product }) => {

    const { addItem, items } = useCart()
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-3">
                <div className="box">
                    <img src={product.img} alt="" />
                    <h1> {product.title} </h1>
                    <h2> {product.price}$ </h2>
                    <button className='btn' onClick={() => {
                        addItem(product);
                        toast.success('Product was added')
                    }}>Add to cart</button>

                    <button className='btn' onClick={() => addWishlist(product, wishlist, dispatch)}>
                        {
                            wishlist.find((selectedProduct) => selectedProduct.id === product.id) ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)
                        }
                    </button>

                </div>
            </div>
        </>
    )
}

export default Productitem