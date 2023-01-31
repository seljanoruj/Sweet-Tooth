import React from 'react'

import img1 from "../../assets/image/team-1.jpeg"
import img2 from "../../assets/image/team-2.jpeg"
import img3 from "../../assets/image/team-3.jpeg"
import img4 from "../../assets/image/team-4.jpeg"
import sweet1 from "../../assets/image/about-img-1.png"
import sweet2 from "../../assets/image/about-img-2.png"
import sweet3 from "../../assets/image/about-img-3.png"
import sweet4 from "../../assets/image/about-img-4.png"
import lol from "../../assets/image/about-lolipop.png"

const AboutUs = () => {
  return (
    <>
      <section className='AFirst'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text">
                <h1>About Us</h1>
                <div className="line"></div>
                <h2>Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc, non fringilla purus ligula non justo. Non fringilla purus. </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='ASecond'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="box">
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>Chocolate Chip</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>Snickerdoodle</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>Granola Cookies</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="box">
                <img src={lol} />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="box">
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>White Chocolate</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>Peanut Butter</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                  <div className="text">
                    <h1>Chocolate Walnut</h1>
                    <p>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum proin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='AThird'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <img src={sweet1} />
                <p>6523</p>
                <h1>Chocolate Roll</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <img src={sweet2} />
                <p>5542</p>
                <h1>Choco Bomb</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <img src={sweet3} />
                <p>2546</p>
                <h1>French Sweet</h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <img src={sweet4} />
                <p>2197</p>
                <h1>Pink Sweet</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='AFourth'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="head">
                <h1>Our Special Team</h1>
                <div className="line"></div>
                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui <br /> auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum auctor</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
              <div className="box">
                <div className="boxGrey"></div>
                <img src={img1} />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
              <div className="box">
                <div className="boxGrey"></div>
                <img src={img2} />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
              <div className="box">
                <div className="boxGrey"></div>
                <img src={img3} />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
              <div className="box">
                <div className="boxGrey"></div>
                <img src={img4} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs