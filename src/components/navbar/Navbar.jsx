import React from 'react'
import './navbar.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to="/profile" style={{ textDecoration:'none' }}>
            <h2>ELAZZOUZI <span>.HA</span></h2>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">
                <span>HOME</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>ABOUT</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span>SERVICES</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/works">
                <span>WORKS</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <span>RESUME</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <Link to='/contact'>
          <input type="button" value="LET'S TALK" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar