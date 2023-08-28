import React from 'react'
import './topbanner.scss'
import Links from '../links/Links'

function Topbanner() {
  return (
    <div className="top-banner">
      <div className="left">
        <a href="mailto:ezhassan.info@gmail.com"><span>ezhassan.info@gmail.com</span></a>
      </div>
      <div className="right">
        <Links/>
      </div>
    </div>
    
  )
}

export default Topbanner