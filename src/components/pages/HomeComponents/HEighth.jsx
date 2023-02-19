import React from 'react'
import photo1 from "../../../assets/image/photo1.jpeg"
import photo2 from "../../../assets/image/photo2.jpeg"
import photo3 from "../../../assets/image/photo3.jpeg"
import photo4 from "../../../assets/image/photo4.jpeg"

const HEighth = () => {
    return (
        <section className='HEighth'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <div className="box"></div>
                            <img src={photo1} alt=""  />
                            <div className="text">
                                <h6>Creamy Creations</h6>
                                <p>Chocolate/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <div className="box"></div>
                            <img src={photo2} alt=""  />
                            <div className="text">
                                <h6>Decorative Pumpkin</h6>
                                <p>Biscuits/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <div className="box"></div>
                            <img src={photo3} alt=""  />
                            <div className="text">
                                <h6>Gold Apple</h6>
                                <p>Biscuits/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <div className="box"></div>
                            <img src={photo4} alt=""  />
                            <div className="text">
                                <h6>The Perfect Dose</h6>
                                <p>Cookies/Golden</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HEighth