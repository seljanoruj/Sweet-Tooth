import React from 'react'
import { Link } from 'react-router-dom'

const Last = () => {
  return (
    <section className='last-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="icons">
                        <Link><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link><i class="fa-brands fa-twitter"></i></Link>
                        <Link><i class="fa-brands fa-instagram"></i></Link>
                        <Link><i class="fa-brands fa-youtube"></i></Link>
                        <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Last