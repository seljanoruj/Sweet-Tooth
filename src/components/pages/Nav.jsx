import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/image/golden-logo.png"
import { useCart } from 'react-use-cart'

const Nav = () => {

    const { items } = useCart()

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="left">
                            <img src={logo} alt=""  />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                        <div className="right">
                            <NavLink activeClassName='now' exact to='/'>Home</NavLink>
                            <NavLink activeClassName='now' to='/aboutus'>About Us</NavLink>
                            <NavLink activeClassName='now' to='/ourprocess'>Our Process</NavLink>
                            <NavLink activeClassName='now' to='/blog'>Blog</NavLink>
                            <NavLink activeClassName='now' to='/shop'>Shop</NavLink>
                            <NavLink activeClassName='now' to='/contactus'>Contact Us</NavLink>

                            <div className='number'>
                                <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                                <span>{items.length}</span>
                            </div>

                            <NavLink to="/wishlist"><i class="fa-solid fa-heart"></i></NavLink>
                            <NavLink to="/signin"  ><i class="fa-solid fa-user"></i></NavLink>

                            <button><i class="fa-solid fa-moon"></i>
                            </button>
                            <button>EN</button>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav