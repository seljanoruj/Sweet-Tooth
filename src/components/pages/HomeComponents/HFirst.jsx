import React from 'react'
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import Nav from "../Nav"

const HFirst = () => {
  return (
    <section className='HFirst'>
      <Nav />
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
        <SwiperSlide className='slide1'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="text">
                  <h1>It's Delish</h1>
                  <div className="line"></div>
                  <p>Sweet Tooth is a delightful theme designed for all types of modern cake shops &amp; ventures. Make your website today!</p>
                  <button>TAKE A BITE</button>
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
                  <h1>A Sweet Bite</h1>
                  <div className="line"></div>
                  <p>Take it all in a single bite. Import the full demo content with a single mouse click using the one-click import feature.</p>
                  <button>TAKE A BITE</button>
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
                  <h1>A Delicacy</h1>
                  <div className="line"></div>
                  <p>Sweet Tooth is packed with carefully designed inner pages &amp; beautiful, completely customizable homepage layouts.</p>
                  <button>TAKE A BITE</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default HFirst