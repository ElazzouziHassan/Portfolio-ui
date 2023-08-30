import './navbar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';



function Navbar() {

  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="nav-bar">
      <button onClick={toggle}>
        {
          darkMode ? "light" : "Dark"
        }
      </button>
    </div>
  )
}

export default Navbar