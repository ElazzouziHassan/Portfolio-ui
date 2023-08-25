import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <h2>Elazzouzi H<span>.</span></h2>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Works</li>
            <li>Resume</li>
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