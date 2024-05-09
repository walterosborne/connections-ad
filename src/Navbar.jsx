import React from 'react'
import { Link } from 'react-router-dom'
import Mtn from './download.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div id='bar'>
                <Link to='/' id='homelink'><div id='logoside'><img src={Mtn} /><h2 id='heading'>Connections</h2></div></Link>

            </div>
        </>
    )
}

export default Navbar

/*
                <div id='links'>
                    <Link to='/staff'><h3 id='stafflink'>Staff</h3></Link>
                    <Link to='/plans'><h3 id='plans'>What We Do</h3></Link>
                    <Link to='/contact'><h3 id='contact'>Contact Us</h3></Link>
                </div>
                */