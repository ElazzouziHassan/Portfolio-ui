import './navbar.scss'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

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
        <button onClick={toggle}>
        {
            darkMode
              ? 
                <WbSunnyOutlinedIcon  className='icon'/>
              :
                <DarkModeOutlinedIcon className='icon'/>
        }
        </button>
      </div>
    </div>
  )
}

export default Navbar