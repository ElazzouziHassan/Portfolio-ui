import React from 'react'
import './HeroSection.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


function HeroSection() {

  return (
    <div className="hero-section">
      <div className="left">
        <h2>Full Stack Web Developer & UI/UX Designer</h2>
        <h3>Where Innovation Meets Imagination: Your Web Solutions Expert.</h3>
        <p> 
          <CheckBoxOutlinedIcon className='list-icon'/>
          <span className='list-text'>
            Bringing Together Code and Creativity to Craft Exceptional Web Experiences.
          </span>
          <br />
        </p>
        <p>
          <CheckBoxOutlinedIcon className='list-icon'/>
          <span className='list-text'>
            Transforming Ideas into Digital Realities with a Fusion of Skills.
          </span>
          <br />
        </p>
        <p>
          <CheckBoxOutlinedIcon className='list-icon'/>
          <span className='list-text'>
            Empowering Brands with Exceptional Full Stack Web and Design Solutions. 
          </span>
          <br />
        </p>
        <p>
          <CheckBoxOutlinedIcon className='list-icon'/>
          <span className='list-text'>
            Your Partner for Next-Level Digital Experiences: Code & Design Combined.
          </span>
          <br />
        </p>
        <p>
          <CheckBoxOutlinedIcon className='list-icon'/>
          <span className='list-text'>
            Designing Tomorrow, Building Today: Your Full Stack & UI/UX Expert.
          </span>
          <br />
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