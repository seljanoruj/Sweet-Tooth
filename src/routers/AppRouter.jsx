import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Entry from '../components/pages/Entry'
import Footer from "../components/common/Footer"
import Last from "../components/common/Last"
import Home from "../components/pages/Home"
import AboutUs from "../components/pages/AboutUs"
import OurProcess from "../components/pages/OurProcess"
import ContactUs from "../components/pages/ContactUs"
import Blog from "../components/pages/Blog"
import Shop from "../components/pages/Shop"
// import Nav from "../components/pages/Nav";

const AppRouter = () => {
  return (
    <BrowserRouter>
     {/* <Nav /> */}
     <Switch>
        <Route exact path="/" component={Entry} ></Route>
        <Route exact path="/home" component={Home} ></Route>
        <Route exact path="/aboutus" component={AboutUs} ></Route>
        <Route exact path="/ourprocess" component={OurProcess} ></Route>
        <Route exact path="/contactus" component={ContactUs} ></Route>
        <Route exact path="/blog" component={Blog} ></Route>
        <Route exact path="/shop" component={Shop} ></Route>
     </Switch>

     <Footer/>
     <Last/>
    </BrowserRouter>
  )
}

export default AppRouter