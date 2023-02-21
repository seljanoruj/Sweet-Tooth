import React, { useState } from 'react'
import data from "../../data/data1"
import Productitem from '../common/Productitem'
import AOS from "aos"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Shop = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [query, setQuery] = useState("");
  const { t } = useTranslation()

  return (
    <>
      <section className='ShopFirst'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <h1 data-aos="fade-down" > {t("shop.0")} </h1>
                <div className="line"></div>
                <h2 data-aos="fade-right" > {t("shop.1")} <i class="fa-solid fa-heart"></i> </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='ShopSecond'>
        <div className="container">
          <div className="row" data-aos="zoom-in-down">

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="head">
                <h1 data-aos="fade-down" > <i class="fa-solid fa-cookie-bite" data-aos="fade-right"></i> Products <i class="fa-solid fa-candy-cane" data-aos="fade-left"></i> </h1>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="Search product"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={() => setQuery('')}>Clear</button>
              </div>
            </div>

            {
              data.filter((u) => u.title.toLocaleLowerCase().includes(query)).map((item,index) => (
                <Productitem product={item} key={index} />
              ))
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Shop