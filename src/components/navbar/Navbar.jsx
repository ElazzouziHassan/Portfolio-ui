import './navbar.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';


import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';

function Navbar() {

  const { toggle, darkMode } = useContext(DarkModeContext);

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
                <HouseboatOutlinedIcon/>
                <span>HOME</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/about">
              <HouseboatOutlinedIcon/>
                <span>ABOUT</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/services">
              <HouseboatOutlinedIcon/>
                <span>SERVICES</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/works">
              <HouseboatOutlinedIcon/>
                <span>WORKS</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/resume">
              <HouseboatOutlinedIcon/>
                <span>RESUME</span>
                <ArrowCircleRightOutlinedIcon className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <button onClick={toggle}>
        {
            darkMode
              ? 
                <span><WbSunnyOutlinedIcon  className='icon'/> <span>Ligh</span></span>
              :
                <span><DarkModeOutlinedIcon className='icon'/><span>Dark</span></span>
        }
        </button>
      </div>
    </div>
  )
}

export default Navbar