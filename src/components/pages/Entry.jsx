import React from 'react'
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "../../assets/image/slider-img1.png"
import img2 from "../../assets/image/slider-img2.png"
import img3 from "../../assets/image/slider-img3.png"
import img4 from "../../assets/image/slider-img4.png"
import logo from "../../assets/image/golden-logo.png"

import owlimg1 from '../../assets/image/carousel-img1.png'
import owlimg2 from '../../assets/image/carousel-img2.png'
import owlimg3 from '../../assets/image/carousel-img3.png'
import owlimg4 from '../../assets/image/carousel-img4.png'

const Entry = () => {

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    items: 4,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 600,
    loop: true
  };

  return (
    <>
      <section className='entry-first'>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="head">
                  <img src={logo} />
                  <button><i class="fa-solid fa-bars"></i></button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className='swiper'
          modules={[Navigation, A11y, EffectFade, Autoplay]}
          slidesPerView={1}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        >
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <SwiperSlide className='slide1'>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text">
                    <img src={img1} />
                    <div className="line"></div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque vel eros sit amet nulla pellentesque cursus nbam.</h1>
                    <button>TASTEFULL</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide2'>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text">
                    <img src={img2} />
                    <div className="line"></div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque vel eros sit amet nulla pellentesque cursus nbam.</h1>
                    <button>TASTEFULL</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide3'>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text">
                    <img src={img3} />
                    <div className="line"></div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque vel eros sit amet nulla pellentesque cursus nbam.</h1>
                    <button>TASTEFULL</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='slide4'>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text">
                    <img src={img4} />
                    <div className="line"></div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque vel eros sit amet nulla pellentesque cursus nbam.</h1>
                    <button>TASTEFULL</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>

      <section className='entry-second'>
        <div className="container-fluid">
          <div className="row">
            <OwlCarousel className='slider-items owl-carousel' {...options} >
              <div class='item'>
                <div className="image"><img src={owlimg3} /></div>
                <h1>Make a Wish</h1>
                <h2>Pastery specialties with 100% <br />chocolate</h2>
              </div>
              <div class='item'>
                <div className="image"><img src={owlimg4} /></div>
                <h1>Lenten Sweet</h1>
                <h2>Pastery specialties with 100% <br />chocolate</h2>
              </div>
              <div class='item'>
                <div className="image"><img src={owlimg1} /></div>
                <h1>Cakes</h1>
                <h2>Pastery specialties with 100% <br />chocolate</h2>
              </div>
              <div class='item'>
                <div className="image"><img src={owlimg2} /></div>
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

export default Entry