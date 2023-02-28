import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "../components/pages/Nav";
import Footer from "../components/common/Footer"
import Last from "../components/common/Last"
import Home from "../components/pages/Home"
import AboutUs from "../components/pages/AboutUs"
import OurProcess from "../components/pages/OurProcess"
import ContactUs from "../components/pages/ContactUs"
import Blog from "../components/pages/Blog"
import Shop from "../components/pages/Shop"
import Cart from "../components/pages/Cart"
import Signin from "../components/pages/Signin"
import Wishlist from '../components/pages/Wishlist';
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

const AppRouter = () => {

  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2000} pauseOnHover={false} />
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route path="/aboutus" element={<AboutUs />} ></Route>
          <Route path="/ourprocess" element={<OurProcess />} ></Route>
          <Route path="/contactus" element={<ContactUs />} ></Route>
          <Route path="/blog" element={<Blog />} ></Route>
          <Route path="/shop" element={<Shop />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="/wishlist" element={<Wishlist />} ></Route>
          <Route path="/signin" element={<Signin />} ></Route>
        </Routes>

        <Footer />
        <Last />
      </BrowserRouter>
    </CartProvider>
  )
}

export default AppRouter