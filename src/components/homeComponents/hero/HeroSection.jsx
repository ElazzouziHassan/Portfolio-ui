import React from 'react'
import './HeroSection.scss'

function HeroSection() {

  return (
    <div className="hero-section">
      <div className="left">
        <h1>EL AZZOUZI HASSAN</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam rem quis quam iusto, maxime amet quo. Quis temporibus sed nobis rerum accusamus saepe praesentium vel qui, repellendus ut odio.</p>
        <input type="button" value="Let's Talk" />
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/11035385/pexels-photo-11035385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hero image" />
      </div>
    </div>
  )
}

export default HeroSection