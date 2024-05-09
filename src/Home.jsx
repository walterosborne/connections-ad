import React from 'react'
import './Home.css'
import arrow from './arrow.gif'
import Tutor from './repl.png'
import Kids from './kids.jpg'
import Lads from './lads.jpg'

import Navbar from './Navbar.jsx'

import { Link } from 'react-router-dom'
import { useRef } from 'react'


function Home() {

  const style = { display: 'flex', border: '2px solid black', borderRadius: '5%', marginTop: '2px', borderRadius: '10%', backgroundColor: 'rgb(240, 234, 214)', width: '45vw', height: '5vh' }

  return (
    <div id='all'>
      <Navbar />
      <div id='pg1'>
        <div id="hometitles">
          <h2 className='title' id='first' >Visualize.</h2>
          <h2 className='title' id='second'>Interact.</h2>
          <h2 className='title' id='third'>Connect.</h2>
        </div>
        <div id='bg'>
          <img id='arrow' src={arrow} alt="down arrow" />
        </div>
      </div>
      <div id='info'>
        <div id='first' className='row'>
          <img style={{ border: '2px solid black' }} src={Tutor} alt="tutor" />
          <div className='text'>
            <Link to='/staff'><h3>Our Product.</h3></Link>
            <p>New Connections is based on last semester's CMSC435 student project, where the tool focuses on graphing relationships and visualizing connections. The main purpose of this tool is to allow propagation of science and connections to be visualized and expanded based on different relationships researchers or scholars may have.
            </p>
            <a href='http://vegetable.cs.umd.edu:3000/' target='_blank'><button>Launch App</button></a>
          </div>
        </div>
        <div id='sideways' className='row'>
          <div className='text'>
            <Link to='/staff'><h3>The Team.</h3></Link>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Ely Cohen</h6> <p style={{ fontSize: '20px', width: '30vw' }}> Computer Science (ecohen23@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Paul Crumrine</h6> <p style={{ fontSize: '20px', width: '30vw' }}> Computer Science (prc@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Stephanie Estrella</h6> <p style={{ fontSize: '20px', width: '30vw' }}> Computer Engineering (sestrell@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Joel Joseph</h6> <p style={{ fontSize: '20px', width: '30vw' }}>Computer Engineering (joseph16@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Walter Osborne</h6> <p style={{ fontSize: '20px', width: '30vw' }}> Computer Science (wosborne@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Revaant Tandon</h6> <p style={{ fontSize: '20px', width: '30vw' }}> Computer Engineering (rtandon@terpmail.umd.edu)</p>
            </div>
            <div style={style}>
              <h6 style={{ fontSize: '28px', width: '15vw' }}>Andrew Timmer</h6> <p style={{ fontSize: '20px', width: '30vw' }}>  Computer Science (atimmer@terpmail.umd.edu)</p>
            </div>
          </div>
          <img style={{ border: '2px solid black' }} src={Kids} alt="tutor" />
        </div>
        <div className='row'>
          <img src={Kids} style={{ border: '2px solid black' }} alt="tutor" />
          <div className='text'>
            <Link to='/contact'><h3>Pure Functionality.</h3></Link>
            <p style={{ fontSize: '24px' }}>The New Connections is using a Python REPL, where the user will use our custom library functions while being able to write their own functions in Python. The functions that the user will be able to use are: graph(), subgraph(), vis(), save(), add(), filter(), shortestpath(), merge(). These custom functions will be based on a library that will be imported to the environment.
            </p>
            <a href='https://para.cs.umd.edu/new_connections/new_connections' target='_blank'><button >Visit Gitlab</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
