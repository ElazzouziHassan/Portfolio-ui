import React from 'react'
import './navbar.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <h2>ELAZZOUZI <span>.HA</span></h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="/about">
                <span>About</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="/services">
                <span>Services</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="/works">
                <span>Works</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </a>
            </li>
            <li>
              <a href="/resume">
                <span>Resume</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <input type="button" value="Contact" />
      </div>
    </div>
  )
}

export default Navbar