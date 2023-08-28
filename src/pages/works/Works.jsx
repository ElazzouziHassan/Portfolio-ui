import React from 'react'
import './works.scss'
import Leftbar from '../../components/_works/_leftbar/Leftbar'
import Main from '../../components/_works/_main/Main'

function Works() {
  return (
    <div className="works">
      <Leftbar />
      <Main/>
    </div>
  )
}

export default Works