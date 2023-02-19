import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import { CartProvider } from 'react-use-cart';
import { ToastContainer } from 'react-toastify';

const AppRouter = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2000} pauseOnHover={false} />
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/aboutus" component={AboutUs} ></Route>
          <Route exact path="/ourprocess" component={OurProcess} ></Route>
          <Route exact path="/contactus" component={ContactUs} ></Route>
          <Route exact path="/blog" component={Blog} ></Route>
          <Route exact path="/shop" component={Shop} ></Route>
          <Route exact path="/cart" component={Cart} ></Route>
          <Route exact path="/signin" component={Signin} ></Route>
        </Switch>

        <Footer />
        <Last />
      </BrowserRouter>
    </CartProvider>
  )
}

export default AppRouter