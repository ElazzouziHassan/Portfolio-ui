import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import Links from '../links/Links'

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <Link to='/profile'><h2>ELAZZOUZI <span>.HA</span></h2></Link>
      </div>
      <div className="center">
        <span>Copyright <a href="#">Wizardy</a> &copy;2023</span>
      </div>
      <div className="right">
        <Links/>
      </div>
    </div>
  )
}

export default Footer