import React from 'react'
import './links.scss'
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function Links() {
  return (
    <div className="links">
      <a href="#" target="_blank"><LinkedInIcon className="icon"/></a>
      <a href="#" target="_blank"><GitHubIcon className="icon"/></a>
      <a href="#" target="_blank"><FacebookIcon className="icon"/></a>
      <a href="#" target="_blank"><InstagramIcon className="icon"/></a>
    </div>
  )
}

export default Links