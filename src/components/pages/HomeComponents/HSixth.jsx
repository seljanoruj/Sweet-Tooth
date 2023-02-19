import React from 'react'
import img from "../../../assets/image/special.png"
import AOS from "aos";
import { useEffect } from 'react';

const HSixth = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <section className='HSixth'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="text" data-aos="fade-right" >
                            <h1>Special of The Day</h1>
                            <div className="line"></div>
                            <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean <br /> sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida <br /> nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin <br /> gravida nibh Ipsum proin gravida nibh vel velit nisi elit consequa. <br /> Nisi elit consequat gravida nibh vel.</h2>
                            <button>TRY</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="img" data-aos="fade-left" >
                            <img src={img} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HSixth