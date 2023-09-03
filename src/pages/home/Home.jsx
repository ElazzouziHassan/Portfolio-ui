import './home.scss'
import React from 'react'
import User from '../../assets/user.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Home() {
  return (
    <div className="home">
      <div className="top">
        <div className="user">
          <img src={User} alt="user" />
          <div className="social-network">
            <a href="#"><GitHubIcon className='icon github'/></a>
            <a href="#"><LinkedInIcon className='icon linkedin'/></a>
            <a href="#"><InstagramIcon className='icon instgram'/></a>
            <a href="#"><FacebookIcon className='icon facebook'/></a>
          </div>
        </div>
        <div className="banner">
          <h1>banner</h1>
        </div>
      </div> 
      <div className="bottom">
        <div className="left">
          <h1>left side</h1>
        </div>
        <div className="right">
          <h1>right side</h1>
        </div>
      </div>    
    </div>
  )
}
export default Home