import React from 'react'
import Navbar from './Navbar.jsx'
import './Contact.css'
import Homie from './homie.png'

function Contact() {
    return (
        <>
            <Navbar />
            <img id='homie' src={Homie} alt="Homie" />
            <div id='wrapper'>
                <div id="content">
                    <h1>Get in touch</h1>
                    <div className="contact">
                        <div className="label">
                            <h2>Email Us</h2>
                            <p>*Click for form email*</p>
                        </div>
                        <h3>contact@olympustutors.com</h3>
                    </div>
                    <div className="contact">
                        <div className="label">
                            <h2>Give us a Ring</h2>
                        </div>
                        <h3>202-902-8861</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact