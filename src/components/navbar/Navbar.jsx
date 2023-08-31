import './navbar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';



function Navbar() {

  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <h2>ELAZZOUZI <span>.HA</span></h2>
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>WORKS</li>
          <li>RESUME</li>
        </ul>
      </div>
      <div className="right">
        <button onClick={toggle}>
          {
            darkMode ? "light" : "Dark"
          }
        </button>
      </div>
      
    </div>
  )
}

export default Navbar