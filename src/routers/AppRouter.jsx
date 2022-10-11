import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Entry from '../components/pages/Entry'
import Footer from "../components/Footer"
import Last from "../components/Last"
import Home from "../components/pages/Home"
import AboutUs from "../components/pages/AboutUs"
import OurProcess from "../components/pages/OurProcess"
import ContactUs from "../components/pages/ContactUs"
import Blog from "../components/pages/Blog"
import Products from "../components/pages/Products"

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Entry} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route exact path="/aboutus" component={AboutUs} ></Route>
        <Route exact path="/ourprocess" component={OurProcess} ></Route>
        <Route exact path="/contactus" component={ContactUs} ></Route>
        <Route exact path="/blog" component={Blog} ></Route>
        <Route exact path="/products" component={Products} ></Route>
     </Switch>

     <Footer/>
     <Last/>
    </BrowserRouter>
  )
}

export default AppRouter