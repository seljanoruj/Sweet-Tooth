import React from 'react'
import data from "../../data/data1"

const Shop = () => {
  return (
    <>
      <section className='ShopFirst'>
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
      <section className='ShopSecond'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="head">
                <h1> <i class="fa-solid fa-cookie-bite"></i> Products <i class="fa-solid fa-candy-cane"></i> </h1>
              </div>
            </div>

            {
              data.map((item) => (
                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className="box">
                    <img src={item.img} alt="" />
                    <h1> {item.title} </h1>
                    <h2> {item.price} </h2>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Shop