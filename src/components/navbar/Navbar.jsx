import React from 'react'
import './navbar.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';

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
              <Link to="/">
                <span>Home</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span>Services</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/works">
                <span>Works</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <span>Resume</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <input type="button" value="Let's Talk" />
      </div>
    </div>
  )
}

export default Navbar