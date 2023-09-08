import React from 'react'
import './subhero.scss'
import {
  UilReact,
  UilCloudComputing,
  UilDatabase,
  UilServer,
  UilDesktopAlt 
} from '@iconscout/react-unicons'

function Subhero() {
  return (
    <div className="sub-hero">
      <div className="cards">
        <div className="card">
          <UilReact className='ui-icon'/>
          <h3>Frontend Developement</h3>
        </div>
        <div className="card">
          <UilServer className='ui-icon'/>
          <h3>Backend Developement</h3>
        </div>
        <div className="card">
          <UilDesktopAlt className='ui-icon' />
          <h3>UI/ UX Design</h3>
        </div>
        <div className="card">
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