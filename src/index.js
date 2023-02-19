import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import "./assets/sass/style.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <AppRouter/>
    </>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"));