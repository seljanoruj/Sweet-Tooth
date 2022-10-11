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
                            <img src={photo1} />
                            <div className="text">
                                <h1>Creamy Creations</h1>
                                <p>Chocolate/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <img src={photo2} />
                            <div className="text">
                                <h1>Decorative Pumpkin</h1>
                                <p>Biscuits/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <img src={photo3} />
                            <div className="text">
                                <h1>Gold Apple</h1>
                                <p>Biscuits/Golden</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 p-0">
                        <div className="photo">
                            <img src={photo4} />
                            <div className="text">
                                <h1>The Perfect Dose</h1>
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