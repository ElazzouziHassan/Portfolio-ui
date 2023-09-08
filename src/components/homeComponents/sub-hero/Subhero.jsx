import React from 'react'
import './subhero.scss'

function Subhero() {
  return (
    <div className="sub-hero">
      <div className="cards">
        <div className="card">
          <img src="#" alt="logo" />
          <h3>Frontend Developement</h3>
        </div>
        <div className="card">
          <img src="#" alt="logo" />
          <h3>Backend Developement</h3>
        </div>
        <div className="card">
          <img src="#" alt="logo" />
          <h3>UI/ UX Design</h3>
        </div>
        <div className="card">
          <img src="#" alt="logo" />
          <h3>Database management</h3>
        </div>
        <div className="card api">
          <img src="#" alt="logo" />
          <h3>API Developement</h3>
        </div>
      </div>
    </div>
  )
}

export default Subhero