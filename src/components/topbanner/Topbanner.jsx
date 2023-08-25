import React from 'react'
import './topbanner.scss'

function Topbanner() {
  return (
    <div className="top-banner">
      <div className="left">
        <a href="mailto:ezhassan.info@gmail.com"><span>ezhassan.info@gmail.com</span></a>
      </div>
      <div className="right">
        <a href="#" target="_blank" rel="Github">Github</a>
        <a href="#" target="_blank" rel="LinkedIn">LinkedIn</a>
        <a href="#" target="_blank" rel="Facebook">Facebook</a>
        <a href="#" target="_blank" rel="Instagram">Instagram</a>
      </div>
    </div>
    
  )
}

export default Topbanner