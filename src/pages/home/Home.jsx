import './home.scss'
import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="top">
        <div className="user">
          <img src="#" alt="user" />
          <div className="social-network">
            <a href="#">G</a>
            <a href="#">L</a>
            <a href="#">F</a>
            <a href="#">I</a>
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