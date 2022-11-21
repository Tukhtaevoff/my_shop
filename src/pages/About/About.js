import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import './About.css'
const About = () => {
  return (
    <main className='about__main'>
      <HeroSection />
      <AboutSection/>
    </main>
  )
}

export default About