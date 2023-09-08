import React from 'react'
import './subhero.scss'
import {
  UilReact,
  UilCloudComputing,
  UilDatabase,
  UilServer,
  UilDesktopAlt 
} from '@iconscout/react-unicons'
import API from '../../../assets/home/api.png'
import Backend from '../../../assets/home/backend.png'
import Frontend from '../../../assets/home/frontend.png'
import Database from '../../../assets/home/database.png'
import UiUx from '../../../assets/home/uiux.png'

function Subhero() {
  return (
    <div className="sub-hero">
      <div className="cards">
        <div className="card">
          {/* <img src={Frontend} alt="logo" /> */}
          <UilReact className='ui-icon'/>
          <h3>Frontend Developement</h3>
        </div>
        <div className="card">
          {/* <img src={Backend} alt="logo" /> */}
          <UilServer className='ui-icon'/>
          <h3>Backend Developement</h3>
        </div>
        <div className="card">
          {/* <img src={UiUx} alt="logo" /> */}
          <UilDesktopAlt className='ui-icon' />
          <h3>UI/ UX Design</h3>
        </div>
        <div className="card">
          {/* <img src={Database} alt="logo" /> */}
          <UilDatabase className='ui-icon'/>
          <h3>Database management</h3>
        </div>
        <div className="card">
          <UilCloudComputing className='ui-icon'/>
          <h3>API Developement</h3>
        </div>
      </div>
    </div>
  )
}

export default Subhero