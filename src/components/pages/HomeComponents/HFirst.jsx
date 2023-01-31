import React from 'react'
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

import image1 from "../../../assets/image/slider-img1.png"
import image2 from "../../../assets/image/slider-img2.png"
import image3 from "../../../assets/image/slider-img3.png"
import image4 from "../../../assets/image/slider-img4.png"

const HFirst = () => {
  return (
    <>

      <section className='HFirst'>
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
              <div className="row justify-content-end">
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
              <div className="row justify-content-end">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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
              <div className="row justify-content-end">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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

      <section className='entry-first'>
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
                    <img src={image1} />
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
                    <img src={image2} />
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
                    <img src={image3} />
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
                    <img src={image4} />
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

    </>
  )
}

export default HFirst