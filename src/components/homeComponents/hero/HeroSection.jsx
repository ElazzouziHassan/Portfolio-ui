import React from 'react'
import './HeroSection.scss'

function HeroSection() {

  return (
    <div className="hero-section">
      <div className="left">
        <h1>EL AZZOUZI HASSAN</h1>
        <p>
          <h3>Where Innovation Meets Imagination: Your Web Solutions Expert.</h3>
          <span>-</span>
          <span>
            Bringing Together Code and Creativity to Craft Exceptional Web Experiences.
          </span><br />
          <span>-</span>
          <span>
            Transforming Ideas into Digital Realities with a Fusion of Skills.
          </span><br />
          <span>-</span>
          <span>
            Empowering Brands with Exceptional Full Stack Web and Design Solutions. 
          </span><br />
          <span>-</span>
          <span>
            Your Partner for Next-Level Digital Experiences: Code & Design Combined.
          </span><br />
          <span>-</span>
          <span>
            Designing Tomorrow, Building Today: Your Full Stack & UI/UX Expert.
          </span><br />
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