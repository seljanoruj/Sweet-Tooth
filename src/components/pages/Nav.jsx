import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/image/black-logo.png"

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="left">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                        <div className="right">
                            <NavLink activeClassName='now' exact to='/home'>Home</NavLink>
                            <NavLink activeClassName='now' to='/aboutus'>About Us</NavLink>
                            <NavLink activeClassName='now' to='/ourprocess'>Our Process</NavLink>
                            <NavLink activeClassName='now' to='/contactus'>Contact Us</NavLink>
                            <NavLink activeClassName='now' to='/blog'>Blog</NavLink>
                            <NavLink activeClassName='now' to='/products' >Products</NavLink>
                            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
                            <button><i class="fa-solid fa-cookie-bite"></i></button>
                            <button>EN</button>
                            <button><i class="fa-solid fa-bars"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav