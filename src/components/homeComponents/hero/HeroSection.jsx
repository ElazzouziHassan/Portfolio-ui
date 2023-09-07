import React from 'react'
import './HeroSection.scss'

function HeroSection() {

  return (
    <div className="hero-section">
      <div className="left">
        <h1>EL AZZOUZI HASSAN</h1>
        <p>
          
        </p>
        <input type="button" value="Let's Talk" />
      </div>
      <div className="right">
        <img src="https://present.readthedocs.io/en/latest/_images/welcome-to-coding.gif" alt="hero image" />
      </div>
    </div>
  )
}

export default HeroSection