import React from 'react'
import Navbar from './Navbar.jsx'

import Me from './me.jpeg'
import Eli from './eli.jpeg'
import './Staff.css'

function Staff() {
    return (
        <>
            <Navbar />
            <div id='staff'>
                <div id='noterow' className="stfrow">
                    <div id='topicnote' className="stftext">
                        <p id='note'>Tutors' topic lists are not exhaustive and do include AP level. Contact us to find out how we can meet your needs!</p>
                    </div>
                </div>
                <div id='waltrow' className='stfrow'>
                    <img id='walt' className='stfimg' src={Me} alt="tutor" />
                    <div className='stftext'>
                        <h3>Walter O</h3>
                        <ul>
                            <li>Topics</li>
                            <ul>
                                <li>SAT</li>
                                <li>Computer Science</li>
                                <li>Calculus</li>
                                <li>Statistics</li>
                            </ul>
                            <li>99th percentile SAT</li>
                            <li>University of Maryland, 3.75 GPA</li>
                            <ul>
                                <li>Major: Computer Science</li>
                                <li>Minor: Statistics</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div id='elirow' className='stfrow'>
                    <div className='stftext'>
                        <h3>Eli K</h3>
                        <ul>
                            <li>Topics</li>
                            <ul>
                                <li>SAT</li>
                                <li>Physics</li>
                                <li>Computer Science</li>
                                <li>Mathematics</li>
                            </ul>
                            <li>Georgetown, 3.9 GPA</li>
                            <ul>
                                <li>Double Major: Computer Science, Physics</li>
                            </ul>
                        </ul>
                    </div>
                    <img id='eli' className='stfimg' src={Eli} alt="tutor" />
                </div>
            </div>
        </>
    )
}

export default Staff