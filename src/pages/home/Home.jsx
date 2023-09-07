import HeroSection from '../../components/homeComponents/hero/HeroSection'
import './home.scss'
import React from 'react'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <HeroSection />
        <div className="bottom">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel minima ex exercitationem, neque adipisci porro necessitatibus facere odit est! Vero omnis eius saepe nobis! Quaerat atque voluptatem unde nulla.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home