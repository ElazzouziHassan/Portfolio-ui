import React from 'react'
import './left.scss'
import works from '../../../../public/data/works.json'

function Leftbar() {
  return (
    <div className="left">
      <ul>
      {
          works.map(e => <li>{e.title} : { e.desc }</li>)
        }
      </ul>
    </div>
  )
}

export default Leftbar