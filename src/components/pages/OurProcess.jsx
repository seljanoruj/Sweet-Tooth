import React from 'react'
import Nav from "./Nav"
import pancakes from "../../assets/image/pancakes.jpeg"
import icon1 from "../../assets/image/icon-1.png"
import icon2 from "../../assets/image/icon-2.png"
import icecream from "../../assets/image/ice-cream2.jpeg"

const OurProcess = () => {
  return (
    <>
      <section className='OFirst'>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text">
                <h1>Our Process</h1>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. <br /> Suspendisse hendrerit turpis dui, eget ultricies erat consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OSecond'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <img src={pancakes} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="box1">
                    <img src={icon1} />
                    <h3>Smooth Bite</h3>
                    <span>Quisque vel eros sit amet nullapel lentes cursus. Morbi blandit luctus lorem set.</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="box1">
                    <img src={icon2} />
                    <h3>Stylish Design</h3>
                    <span>Quisque vel eros sit amet nullapel lentes cursus. Morbi blandit luctus lorem set.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OThird'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <h1>Our Great Story</h1>
                <div className="line"></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neque eu, maximus urna. Maecenas vitae nunc sit amet risus aliquet. </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <img src={icecream} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurProcess