import React from 'react'
import ball1 from "../../../assets/image/ball1.png"
import ball2 from "../../../assets/image/ball2.png"
import ball3 from "../../../assets/image/ball3.png"
import ball4 from "../../../assets/image/ball4.png"

import AOS from "aos";
import { useEffect } from 'react';

const HSecond = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <section className='HSecond'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-5">
            <div className="head" data-aos="fade-down" >
              <h1>Our Tradition</h1>
              <div className="line"></div>
              <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean <br /> sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida nibh <br /> vel velit auctor.</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="bottom">
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-2">
              <div className="box" data-aos="flip-left">
                <img src={ball1} alt="" />
                <h1>Crinkles</h1>
                <h2>Lorem Ipsum proin gravida nibh vel velit auctor sit lorem.</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-2">
              <div className="box" data-aos="flip-left">
                <img src={ball2} alt="" />
                <h1>Florentines</h1>
                <h2>Lorem Ipsum proin gravida nibh vel velit auctor sit lorem.</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-2">
              <div className="box" data-aos="flip-left">
                <img src={ball3} alt="" />
                <h1>Angeletti</h1>
                <h2>Lorem Ipsum proin gravida nibh vel velit auctor sit lorem.</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-2">
              <div className="box" data-aos="flip-left">
                <img src={ball4} alt="" />
                <h1>Macaroons</h1>
                <h2>Lorem Ipsum proin gravida nibh vel velit auctor sit lorem.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HSecond