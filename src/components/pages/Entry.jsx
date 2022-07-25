import React from 'react'
// import Swiper core and required modules
import { Navigation,A11y } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/image/slider-img1.png"
import img2 from "../../assets/image/slider-img2.png"
import img3 from "../../assets/image/slider-img3.png"
import img4 from "../../assets/image/slider-img4.png"
import logo from "../../assets/image/golden-logo.png"
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const Entry = () => {
  return (
    <>
    <section className='entry-first'>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="head">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </header>
       <Swiper className='swiper'
      // install Swiper modules
      modules={[Navigation,A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      style={{width: "100%",height: "100%"}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
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
      {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
        <div class='item'>
        <h4>1</h4>
        </div>
        <div class='item'>
        <h4>2</h4>
        </div>
        <div class='item'>
        <h4>3</h4>
        </div>
        <div class='item'>
        <h4>4</h4>
        </div>
      </OwlCarousel> */}
    </section>
    </>
  )
}

export default Entry