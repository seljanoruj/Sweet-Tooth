import React from 'react'
import Nav from "./Nav"

const ContactUs = () => {
  return (
    <>
      <section className='CFirst'>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="text">
                <h1>Contact Us</h1>
                <div className="line"></div>
                <span>Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc, non fringilla purus ligula non justo. Non fringilla purus.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='CSecond'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="left">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="head">
                    <h1>Our Company</h1>
                    <div className="line"></div>
                    <span>Etiam convallis, felis quis dapibus dictum, libero mauris luctus <br /> nunc, non fringilla purus ligula non justo non.</span>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 pt-4">
                  <div className="text">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="box1">
                        <h1>New York</h1>
                        <p>198 West 21th Street, Suite 721 New York NY 10010</p>
                        <h1>Email:</h1>
                        <p>sweettooth@example.com</p>
                        <p>Phone: +88 (0) 101 0000</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="box1">
                        <h1>Paris</h1>
                        <p>198 West 21th Street, Suite 721 Paris 20020</p>
                        <h1>Email:</h1>
                        <p>sweettooth@example.com</p>
                        <p>Phone: +88 (0) 101 0000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="right">
                <input type="text" placeholder='Your Name' />
                <input type="email"placeholder='Your Email' />
                <input className='big' type="text" placeholder='Your Message' />
                <button>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='CThird'>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
      </section>
    </>
  )
}

export default ContactUs