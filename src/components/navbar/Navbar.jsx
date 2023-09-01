import './navbar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';



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
          <Link to='/'><li>HOME</li></Link>
          <Link to='/about'><li>ABOUT</li></Link>
          <Link to='/services'><li>SERVICES</li></Link>
          <Link to='/works'><li>WORKS</li></Link>
          <Link to='resume'><li>RESUME</li></Link>
        </ul>
      </div>
      <div className="right">
        <button onClick={toggle}>
          {
            darkMode ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>
          }
        </button>
      </div>
      
    </div>
  )
}

export default Navbar