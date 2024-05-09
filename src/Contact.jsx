import React from 'react'
import Navbar from './Navbar.jsx'
import './Contact.css'

import Mail from './mail.svg'
import Phone from './phone.svg'
import Homie from './homie.png'

function Contact() {
    return (
        <>
            <Navbar />
            <img id='homie' src={Homie} alt="Homie" />
            <div id='wrapper'>
                <div id="content">
                    <h1>Get in touch</h1>
                    <a href="mailto:contact@olympustutors.com?subject=Tuturing&body=Hey Olympus! My name is____, I live in _____, and I am interested in you tutoring my child. They need help with ____, and we would like you to start on _____. You can respond to me at this email (replace if different), or my number ______. Additionally, ... . Thanks!" target='_blank' >
                        <div className="contact">
                            <div className="label">
                                <h2>Email Us</h2>
                                <p>*Click for form email*</p>
                                <img className='img' src={Mail} />
                            </div>
                            <h3>contact@olympustutors.com</h3>
                        </div>
                    </a>
                    <div className="contact">
                        <div className="label">
                            <h2>Give us a Ring</h2>
                            <img className='img' src={Phone} />
                        </div>
                        <h3>202-902-8861</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact