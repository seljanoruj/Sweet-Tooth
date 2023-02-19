import React from 'react'
import data from "../../data/data1"
import Productitem from '../common/Productitem'
import AOS from "aos"
import { useEffect } from 'react'

const Shop = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className='ShopFirst'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <h1 data-aos="fade-down" >Shop</h1>
                <div className="line"></div>
                <h2 data-aos="fade-right" >Our Products Are Very Delicious ! <i class="fa-solid fa-heart"></i> </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='ShopSecond' data-aos="zoom-in-down">
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="head">
                <h1 data-aos="fade-down" > <i class="fa-solid fa-cookie-bite" data-aos="fade-right"></i> Products <i class="fa-solid fa-candy-cane" data-aos="fade-left"></i> </h1>
              </div>
            </div>

            {
              data.map((item) => (
                <Productitem 
                title={item.title} 
                img={item.img} 
                price={item.price} 
                product={item} />
              ))
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Shop