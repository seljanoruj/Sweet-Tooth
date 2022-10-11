import React from 'react'
import Cookie from "../../../assets/image/cookie.png"

const HThird = () => {
    return (
        <section className='HThird'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <div className="item">
                                <h1>Peanut Butter Cookies</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                            <div className="item">
                                <h1>Almond Biscotti</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                            <div className="item">
                                <h1>Glazed Lemon Cookies</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <img src={Cookie} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box">
                            <div className="item">
                                <h1>Chewy Spice Cookies</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                            <div className="item">
                                <h1>Shortbread Wedges</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                            <div className="item">
                                <h1>Gingerbread Cookies</h1>
                                <h2>Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HThird