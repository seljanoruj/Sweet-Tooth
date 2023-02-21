import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Last = () => {

    const [visible, setVisible] = useState(false)


    useEffect(() => {
        toggleVisibleButton()
    }, [])


    const toggleVisibleButton = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 500) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    window.addEventListener('scroll', toggleVisibleButton)

    const scrollTopTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

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
                            <button onClick={scrollTopTop} style={{ display: visible ? 'block' : 'none' }}><i class="fa-solid fa-arrow-up"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Last