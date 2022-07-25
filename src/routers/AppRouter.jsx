import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Entry from '../components/pages/Entry'
import Footer from "../components/Footer"
import Last from "../components/Last"

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Entry/>

    <Switch>
        <Route></Route>
    </Switch>

    <Footer/>
    <Last/>
    </BrowserRouter>
  )
}

export default AppRouter