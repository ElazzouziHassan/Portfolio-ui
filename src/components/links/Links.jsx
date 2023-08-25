import React from 'react'
import './links.scss'
import {
  LinkedInIcon,
  GitHubIcon,
  FacebookIcon,
  InstagramIcon
} from '@mui/icons-material/LinkedIn';

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