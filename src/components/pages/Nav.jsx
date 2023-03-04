import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/image/golden-logo.png"
import { useCart } from 'react-use-cart'
import Mode from "../common/Mode"
import { useTranslation } from 'react-i18next'
import Lang from '../common/Lang'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const { t } = useTranslation()
    const { items } = useCart()

    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset < 600) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        })
    }, [])

    const wishlist = useSelector((state) => state.wishlist);

    const history = useNavigate()

    const handleLogoutClick = () => {
        localStorage.clear();
        console.log("salam");
        history("/signin");
    };
    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");
    const authButton = () => {
        if (getEmail === null) {
            return (
                <>
                    <NavLink to="/signin">
                        <button>Log in <i class="fa-solid fa-user"></i></button>
                    </NavLink>
                </>
            );
        } else {
            return (
                <div class="dropdown">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {getEmail}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" onClick={handleLogoutClick}>
                            LogOut
                        </a>
                    </div>
                </div>
            );
        }
    };

    return (
        <nav className={fixed ? '' : 'fix'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="left">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-3 col-sm-3 col-12">
                        <div className="right">
                            <NavLink activeClassName='now' exact to='/'>{t("nav.0")}</NavLink>
                            <NavLink activeClassName='now' to='/aboutus'>{t("nav.1")}</NavLink>
                            <NavLink activeClassName='now' to='/ourprocess'>{t("nav.2")}</NavLink>
                            <NavLink activeClassName='now' to='/blog'>{t("nav.3")}</NavLink>
                            <NavLink activeClassName='now' to='/shop'>{t("nav.4")}</NavLink>
                            <NavLink activeClassName='now' to='/contactus'>{t("nav.5")}</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-3 col-12">
                        <div className="right">
                            <div className='number'>
                                <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                                <span>{items.length}</span>
                            </div>

                            <div className="number">
                                <NavLink to="/wishlist"><i class="fa-solid fa-heart"></i></NavLink>
                                <span>{wishlist.length}</span>
                            </div>

                            {authButton()}

                            <Lang />
                            <Mode />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav