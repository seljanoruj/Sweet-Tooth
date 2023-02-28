import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import "./assets/sass/style.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./store/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </React.StrictMode>
  </Provider>
)