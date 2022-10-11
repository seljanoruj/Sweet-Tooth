import React from 'react'
import img1 from "../../../assets/image/menu1.png"
import img2 from "../../../assets/image/menu2.png"
import img3 from "../../../assets/image/menu3.png"
import img4 from "../../../assets/image/menu4.png"
import img5 from "../../../assets/image/menu5.png"
import img6 from "../../../assets/image/menu6.png"

const HSeventh = () => {
    return (
        <section className='HSeventh'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="head">
                            <h1>Menu</h1>
                            <div className="line"></div>
                            <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem <br /> qui bibendum auctor, nisi elit consequat gravida nibh vel velit auctor lorem qui.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box">
                            <div className="box-item">
                                <div className="img">
                                    <img src={img1} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Sweet Bite"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div>25.00$</p>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="img">
                                    <img src={img2} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Jam Thumbprints"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div> 15.00$</p>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="img">
                                    <img src={img3} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Pecan Sandies"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div> 20.00$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box">
                            <div className="box-item">
                                <div className="img">
                                    <img src={img4} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Chewy Spice"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div> 30.00$</p>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="img">
                                    <img src={img5} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Angeletti"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div> 25.00$</p>
                                </div>
                            </div>
                            <div className="box-item">
                                <div className="img">
                                    <img src={img6} />
                                </div>
                                <div className="text">
                                    <h1>Cake "Spritz"</h1>
                                    <p>Lorem ipsum dolor, feugiat decilata. <div className="dottd"></div> 15.00$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HSeventh