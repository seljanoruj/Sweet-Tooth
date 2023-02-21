import React from 'react'
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart'

const Productitem = ({ product }) => {

    const { addItem, items } = useCart()

    
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
                </div>
            </div>
        </>
    )
}

export default Productitem