import React from 'react'
import img from "../../../assets/image/honey.png"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import owlimg1 from '../../../assets/image/carousel-img1.png'
import owlimg2 from '../../../assets/image/carousel-img2.png'
import owlimg3 from '../../../assets/image/carousel-img3.png'
import owlimg4 from '../../../assets/image/carousel-img4.png'

import AOS from "aos";
import { useEffect } from 'react';

const HFifth = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        items: 4,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 1000,
        loop: true
    };

    return (
        <>

            <section className='HFifth'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="img" data-aos="fade-right" >
                                <img src={img} alt=""  />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="text" data-aos="fade-left" >
                                <h1>Choose Your Flavor</h1>
                                <div className="line"></div>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean <br /> sollicitudin, lorem qui bibendum auctor, nisi elit consequat gravida <br /> nibh vel velit auctor lorem qui bibendum auctor aliquetenean proin <br /> gravida nibh Ipsum proin gravida nibh vel velit nisi elit consequa. <br /> Nisi elit consequat gravida nibh vel.</h2>
                                <button>ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='entry-second'>
                <div className="container-fluid">
                    <div className="row">
                        <OwlCarousel className='slider-items owl-carousel' {...options} >
                            <div class='item'>
                                <div className="image"><img src={owlimg3} alt="" /></div>
                                <h1>Make a Wish</h1>
                                <h2>Pastery specialties with 100% <br />chocolate</h2>
                            </div>
                            <div class='item'>
                                <div className="image"><img src={owlimg4} alt="" /></div>
                                <h1>Lenten Sweet</h1>
                                <h2>Pastery specialties with 100% <br />chocolate</h2>
                            </div>
                            <div class='item'>
                                <div className="image"><img src={owlimg1} alt="" /></div>
                                <h1>Cakes</h1>
                                <h2>Pastery specialties with 100% <br />chocolate</h2>
                            </div>
                            <div class='item'>
                                <div className="image"><img src={owlimg2} alt="" /></div>
                                <h1>Piece</h1>
                                <h2>Pastery specialties with 100% <br />chocolate</h2>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HFifth