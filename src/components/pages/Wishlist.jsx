import React from 'react'
import { useSelector } from 'react-redux'
import Productitem from '../common/Productitem';
import AOS from "aos"
import { useEffect } from 'react'

const Wishlist = () => {

    const wishlist = useSelector((state) => state.wishlist);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <section className='WishFirst'>
                <div className="col-12">
                    <h1 data-aos="fade-down">
                        <i class="fa-solid fa-cookie-bite" data-aos="fade-right"></i>
                        Wishlist
                        <i class="fa-solid fa-candy-cane" data-aos="fade-left"></i>
                    </h1>
                </div>
            </section>
            {
                wishlist.length !== 0 ? (
                    <div className="ShopSecond">
                        <div className="container">
                            <div className="row">
                                {wishlist?.map((item, index) => (<Productitem product={item} />))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cart d-flex justify-content-center align-items-center flex-column">
                        <h3 style={{ fontWeight: 'bold' }}>Your wishlist is empty</h3> <i className="fa-solid fa-heart"></i>
                    </div>
                )
            }
        </>
    )
}

export default Wishlist