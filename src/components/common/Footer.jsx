import React from 'react'
import { Link } from 'react-router-dom'
import crown from "../../assets/image/crown-logo.png"
import map from "../../assets/image/map.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box1">
                            <h1>Sweet Tooth</h1>
                            <div className="line"></div>
                            <Link>Eight Avenue 487, New York</Link>
                            <Link>+387643932728</Link>
                            <Link>sweettooth@example.com</Link>
                            <Link>© 2017 Qode Interactive,<br /> All Rights Reserved</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box2">
                            <img src={crown} alt="" />
                            <h1>About Us</h1>
                            <div className="line"></div>
                            <h2>Sed ac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar ante tempor tincidunt. Etiam lacus eros, viverra non massa tempus, commodo fringilla nulla. Quisque vehicula.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box3">
                            <img src={map} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer