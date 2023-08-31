import React from 'react'
import './profile.scss'

function Profile() {
  return (
    <div className="profile">
      <div className="top">
        <div className="user-card">
          <div className="user">
            <img src="#" alt="user" />
            <span>Jhone Doe</span>
            <span>badge</span>
            <h2>Title</h2>
          </div>
          <div className="action">
            <button>Let's Talk</button>
          </div>
        </div>
        <div className="intro">
          <span>Intro</span>
          <hr />
          <div className="info">
          </div>
        </div>
      </div>
      <div className="posts">
        <h1>posts</h1>
      </div>
    </div>
  )
}
export default Profile