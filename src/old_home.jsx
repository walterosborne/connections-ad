import React from 'react'
import './Home.css'
import brain from './brain.jpg'
import arrow from './arrow.gif'
import Tutor from './tutor.jpg'
import Kids from './kids.jpeg'
import Lads from './lads.jpg'
import Color from './color.jpg'

import { Link } from 'react-router-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'
import Navbar from './Navbar'


function Home() {

  const ref = useRef();

  return (
    <Parallax id='all' pages={3.8} ref={ref}>
      <ParallaxLayer id='bg'
        sticky={{ start: 0, end: .8 }}
        style={{
          backgroundSize: 'cover'
        }}
        speed={100} />
      <ParallaxLayer
        sticky={{ start: 0, end: .8 }}>
        <img id='arrow' src={arrow} alt="down arrow" />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 0, end: .8 }}>
        <h2 className='title' id='first' >Better.</h2>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: .5, end: .8 }}
      >
        <h2 className='title' id='second'>Scores.</h2>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: .66, end: .8 }}
      >
        <h2 className='title' id='third'>Now.</h2>
      </ParallaxLayer>
      <ParallaxLayer id='pg2'
        offset={1.8}
        factor={2}
        style={{
          background: 'linear-gradient(90deg, rgba(241,232,28,1) 0%, rgba(198,198,198,1) 50%, rgba(255,255,255,1) 100%)'
        }}>
        <div id='info'>
          <div id='bigger' className='row'>
            <img src={Tutor} alt="tutor" />
            <div className='text'>
              <Link to='/staff'><h3>Tutors who know the process</h3></Link>
              <p>We select the most qualified tutors with top-of-the-line scores
                from the best universities, who not only know content like the back of their hand,
                but can enthusiastically teach it to anyone.
              </p>
              <Link to='/staff'><button>Staff</button></Link>
            </div>
          </div>
          <div className='row'>
            <div className='text'>
              <Link to='/staff'><h3>Pupil-Oriented</h3></Link>
              <p>Unlike our professors, we're not here to sell textbooks. We'll provide complementary reference materials,
                and aid you in pinpointing specfic areas for improvement and developing strategies to build up those skills.
              </p>
              <Link to='/plans'><button>What We Do</button></Link>
            </div>
            <img src={Kids} alt="tutor" />
          </div>
          <div className='row'>
            <img src={Lads} alt="tutor" />
            <div className='text'>
              <Link to='/contact'><h3>Get in Touch</h3></Link>
              <p>We'd love to hear from you! Feel free to reach out to arrange a meeting, or to discuss our strategies, availability, pricing, or anything else that comes to mind.
              </p>
              <Link to='/contact'><button >Contact Us</button></Link>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}


export default Home
