import React from 'react'
import './profile.scss'
import Footer from '../../components/footer/Footer'

function Profile() {
  return (
    <div className="profile">
      <div className="main">
        <div className="left">
          left
        </div>
        <div className="right">
          <div className="top">
            right-top
          </div>
          <div className="bottom">
            right-bottom
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Profile