import HeroSection from '../../components/homeComponents/hero/HeroSection'
import Subhero from '../../components/homeComponents/sub-hero/Subhero'
import './home.scss'
import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <HeroSection />
        <Subhero/>
      </div>
    </div>
  )
}

export default Home