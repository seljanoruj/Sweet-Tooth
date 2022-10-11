import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";

const HFourth = () => {
    return (
        <section className='HFourth'>
            <div className="container">
                <div className="row">
                    <Swiper
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination,Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='slide'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text">
                                            <h1>Amazing Taste</h1>
                                            <div className="line"></div>
                                            <h2>Auctor gravida lorem Ipsum proin nibh vel velit aliquetenean sollicitudin, gravida lorem <br /> qui bibendum auctor, nisi elit consequat nibh vel velit auctor lorem qui bibendum auctor <br /> aliquetenean proin gravida nibh Ipsum proin gravida consequa nibh vel nisi elit.  Elit nisi <br />
                                            consequat gravida vel velit nibh velit.</h2>
                                            <h3>Maggie Brock/<span>Candy Maker</span> </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text">
                                            <h1>Amazing Taste</h1>
                                            <div className="line"></div>
                                            <h2>Gravida lorem Ipsum proin nibh vel velit auctor aliquetenean sollicitudin, lorem qui <br /> bibendum auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum <br /> auctor aliquetenean proin gravida nibh Ipsum proin gravida consequa nibh vel velit nisi <br /> elit. Elit nisi consequat gravida vel proin nibh.</h2>
                                            <h3>Lisa Armstrong/<span>Craftologist</span> </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="text">
                                            <h1>Amazing Taste</h1>
                                            <div className="line"></div>
                                            <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui <br /> bibendum auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui bibendum <br /> auctor aliquetenean proin gravida nibh Ipsum proin gravida nibh vel velit nisi elit <br /> consequa. Nisi elit consequat gravida nibh Ipsum proin.</h2>
                                            <h3>Bernard Johana/<span>Pastry Cook</span> </h3>
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

export default HFourth