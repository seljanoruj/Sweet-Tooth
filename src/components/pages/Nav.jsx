import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/image/golden-logo.png"
import { useCart } from 'react-use-cart'
import Mode from "../common/Mode"
import { useTranslation } from 'react-i18next'
import Lang from '../common/Lang'

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

    return (
        <nav className={fixed ? '' : 'fix'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="left">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                        <div className="right">
                            <NavLink activeClassName='now' exact to='/'>{t("nav.0")}</NavLink>
                            <NavLink activeClassName='now' to='/aboutus'>{t("nav.1")}</NavLink>
                            <NavLink activeClassName='now' to='/ourprocess'>{t("nav.2")}</NavLink>
                            <NavLink activeClassName='now' to='/blog'>{t("nav.3")}</NavLink>
                            <NavLink activeClassName='now' to='/shop'>{t("nav.4")}</NavLink>
                            <NavLink activeClassName='now' to='/contactus'>{t("nav.5")}</NavLink>

                            <div className='number'>
                                <NavLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                                <span>{items.length}</span>
                            </div>

                            {/* <NavLink to="/wishlist"><i class="fa-solid fa-heart"></i></NavLink> */}
                            {/* <NavLink to="/signin"  ><i class="fa-solid fa-user"></i></NavLink> */}

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