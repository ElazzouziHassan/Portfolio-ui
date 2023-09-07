import React from 'react'
import './HeroSection.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <div className="social-media">
          <a href='#'>
            <GitHubIcon className='s-icon github' />
            <span>GitHub</span>
          </a>
          <a href='#'>
            <LinkedInIcon className='s-icon linkedIn' />
            <span>LinkedIn</span>
          </a>
          <a href='#'>
            <FacebookIcon className='s-icon facebook' />
            <span>Facebook</span>
          </a>
          <a href='#'>
            <TwitterIcon className='s-icon twitter' />
            <span>Twitter</span>
          </a>
          <a href='#'>
            <InstagramIcon className='s-icon instagram' />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="right">
        <img src="https://present.readthedocs.io/en/latest/_images/welcome-to-coding.gif" alt="hero image" />
      </div>
    </div>
  )
}

export default HeroSection