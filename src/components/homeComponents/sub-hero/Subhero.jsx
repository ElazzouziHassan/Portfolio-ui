import React from 'react'
import './subhero.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Subhero() {
  return (
    <div className="sub-hero">
      <div className="hr">
        <hr />
      </div>
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
  )
}

export default Subhero