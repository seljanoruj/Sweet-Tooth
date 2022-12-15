import React from 'react'
import Nav from "./Nav"

const Products = () => {
  return (
    <>
      <section className='PFirst'>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <h1>Shop</h1>
                <div className="line"></div>
                <span>Our Products Are Very Delicious ! <i class="fa-solid fa-heart"></i> </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='PSecond'>
        <div className="container">
          <div className="row">
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Products