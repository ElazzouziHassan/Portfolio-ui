import HeroSection from '../../components/homeComponents/hero/HeroSection'
import './home.scss'
import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <HeroSection/> 
      </div>
    </div>
  )
}

export default Home