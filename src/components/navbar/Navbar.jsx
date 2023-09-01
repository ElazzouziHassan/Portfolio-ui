import './navbar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';


function Navbar() {

  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to='/'><h2>ELAZZOUZI <span>.HA</span></h2></Link>
        </div>
      </div>
      <div className="menu">
        <ul>
          <Link to='/'>
            <li><OtherHousesOutlinedIcon className="icon" /> HOME</li>
          </Link>
          <Link to='/about'> 
            <li><CodeOutlinedIcon className="icon" /> ABOUT</li>
          </Link>
          <Link to='/services'>            
            <li><EngineeringOutlinedIcon className="icon" /> SERVICES</li>
          </Link>
          <Link to='/works'>            
            <li><TerminalOutlinedIcon className="icon" /> WORKS</li>
          </Link>
          <Link to='resume'>           
            <li><BadgeOutlinedIcon className="icon" /> RESUME</li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <button onClick={toggle}>
          {
            darkMode ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>
          }
        </button>
        <Link to="/contact">
          <button>
            <PermContactCalendarOutlinedIcon className='icon' />
          </button>
        </Link>
      </div>     
    </div>
  )
}

export default Navbar