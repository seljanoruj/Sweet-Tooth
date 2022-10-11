import React from 'react'
import img from "../../../assets/image/honey.png"

const HFifth = () => {
  return (
      <section className='HFifth'>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="img">
                          <img src={img} />
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="text">
                          <h1>Choose Your Flavor</h1>
                          <div className="line"></div>
                          <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean <br /> sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida <br /> nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin <br /> gravida nibh Ipsum proin gravida nibh vel velit nisi elit consequa. <br /> Nisi elit consequat gravida nibh vel.</h2>
                          <button>ORDER</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default HFifth