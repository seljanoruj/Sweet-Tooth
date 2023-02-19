import React, { useState } from 'react'
import pancakes from "../../assets/image/pancakes.jpeg"
import icon1 from "../../assets/image/icon-1.png"
import icon2 from "../../assets/image/icon-2.png"
import icecream from "../../assets/image/ice-cream2.jpeg"
import cake from "../../assets/image/cake.jpeg"
import AOS from "aos"
import { useEffect } from 'react'

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const OurProcess = () => {

  const [counterOn, setCounterOn] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const items = [
    {
      title: 'salanm bakry',
      category: 'bakery'
    },
    {
      title: 'salanm pstry',
      category: 'pastryr'
    },
    {
      title: 'salanm recie',
      category: 'recipe'
    }
  ]

  const allCategories = ['all', ...new Set(items.map((item) => item.category))]

  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState('')
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    setActiveCategory(category)
    if (category === 'all') {
      setMenuItems(items)
      return
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  }

  return (
    <>
      <section className='OFirst'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text">
                <h1 data-aos="fade-down" >Our Process</h1>
                <div data-aos="fade-down" className="line"></div>
                <h2 data-aos="fade-down" > About Our Process <i class="fa-solid fa-star"></i> </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OSecond'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box" data-aos="fade-right"  >
                <img src={pancakes} alt=""  />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="box1" data-aos="fade-down" >
                    <img src={icon1} alt=""  />
                    <h3>Smooth Bite</h3>
                    <span>Quisque vel eros sit amet nullapel lentes cursus. Morbi blandit luctus lorem set.</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="box1" data-aos="fade-down"  >
                    <img src={icon2} alt=""  />
                    <h3>Stylish Design</h3>
                    <span>Quisque vel eros sit amet nullapel lentes cursus. Morbi blandit luctus lorem set.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OThird'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">
                <h1>Our Great Story</h1>
                <div className="line"></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, condimentum neque eu, maximus urna. Maecenas vitae nunc sit amet risus aliquet. </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box" data-aos="fade-left"  >
                <img src={icecream} alt=""  />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OFourth'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <h1>Working Hours</h1>
                <p>Morbi blandit luctus lorem sed ac odio aliquet varius</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <h1>Awesome Projects</h1>
                <p>Morbi blandit luctus lorem sed ac odio aliquet varius</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <h1>New Recipes</h1>
                <p>Morbi blandit luctus lorem sed ac odio aliquet varius</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
              <div className="box">
                <h1>Best Clients</h1>
                <p>Morbi blandit luctus lorem sed ac odio aliquet varius</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OFifth'>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box">

                <div className="buttons">
                  {
                    categories.map((category, index) => (
                      <div>
                        <button onClick={() => filterItems(category)}>{category}</button>
                      </div>
                    )
                    )
                  }
                </div>

                {
                  menuItems.map((item, index) =>
                  (
                    <p>{item.title}</p>
                  )
                  )
                }

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit hendrerit faucibus. Suspendisse hendrerit turpis dui, eget ultricies erat consequat ut. Sed ac velit iaculis, neque euty condimentum, maximus urnahn.</p>
                <span><i class="fa-solid fa-check"></i> Etiam posuere quis</span>
                <span><i class="fa-solid fa-check"></i> Praesent varius</span>
                <span><i class="fa-solid fa-check"></i> Aliquam erat volutpat</span>
                <span><i class="fa-solid fa-check"></i> Nullam sollicitudin</span>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OSixth'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="left" data-aos="fade-right" >
                <h1>Attention To Detail</h1>
                <div className="line"></div>
                <span>Nullam metus nisi, cursus sit amet euismod eget, pretium ac nunc.<br /> Integer maximus ante in lectus imperdiet, sed sagittis libero feugiat. <br /> Morbi elementum magna sed nisi luctus, quis convallis nunc porta. Morbi <br /> in molestie dui. Nullam ligula.</span>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                  <div className="boxes">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="box">
                          {
                            counterOn && <span> <CountUp start={0} end={10} duration={4} delay={0} ></CountUp> </span>
                          }
                          <h2>Years</h2>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="box">
                          {
                            counterOn && <span> <CountUp start={0} end={11} duration={4} delay={0} ></CountUp> </span>
                          }
                          <h2>Months</h2>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="box">
                          {
                            counterOn && <span> <CountUp start={0} end={25} duration={4} delay={0} ></CountUp> </span>
                          }
                          <h2>Days</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollTrigger>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="right" data-aos="fade-left" >
                <img src={cake} alt=""  />
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default OurProcess