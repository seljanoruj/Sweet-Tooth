import React from 'react'
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import AOS from "aos"
import { useEffect } from 'react'

const Signin = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const name = useRef();
    const password = useRef();
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            name.current.value === "Seljan" &&
            password.current.value === "Seljan777"
        ) {
            localStorage.setItem("emailData", "Seljan");
            localStorage.setItem("passwordData", "Seljan777");
            window.location.reload();
            history('/')
        }
        else {
            toast.warning('Please fill all the places')
        }
    };

    return (
        <section className='SignFirst'>
            <form onSubmit={handleSubmit}>

                <h2 data-aos="fade-down" >
                    <i class="fa-solid fa-cookie-bite" data-aos="fade-right"></i>
                    Log in to your account
                    <i class="fa-solid fa-candy-cane" data-aos="fade-left"></i>
                </h2>

                <input data-aos="fade-down"  type="text" placeholder="Your Username" ref={name} />

                <input data-aos="fade-down" 
                    type="password"
                    placeholder="Your Password"
                    ref={password}
                />

                <button data-aos="fade-down"  type="submit">Log in</button>

            </form>
        </section>
    )
}

export default Signin