import React from 'react'
import blogData from '../../data/blogData'
import AOS from "aos"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Blog = () => {

  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>

      <section className='BlogFirst' >
        <div className="container">
          <div className="row justify-content-end ">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="box" data-aos="fade-down" >
                <h1>{t("blog.0")}</h1>
                <div className="line"></div>
                <h2>{t("blog.1")} <i class="fa-solid fa-hand-holding-heart"></i> </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='BlogSecond'>
        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="head">
                <h1 data-aos="fade-down" > <i class="fa-solid fa-gift" data-aos="fade-right" ></i> Blogs <i class="fa-solid fa-cookie-bite" data-aos="fade-left" ></i> </h1>
              </div>
            </div>

            {
              blogData.map((blog) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-4">
                  <div className="box" data-aos="zoom-in-up" >
                    <img src={blog.img} alt="" />
                    <h1> {blog.title} <i class="fa-regular fa-heart"></i> </h1>
                    <div className="line"></div>
                    <h2> {blog.desc} </h2>
                    <h3> {blog.date} </h3>
                    <button>Read More</button>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>

    </>
  )
}

export default Blog