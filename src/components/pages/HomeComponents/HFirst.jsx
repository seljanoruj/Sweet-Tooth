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
      <div className="container">
        <div className="row">
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
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <SwiperSlide className='slide1'>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text">
                      salsam
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
                      mamamaam
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
                      helloo
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HFirst