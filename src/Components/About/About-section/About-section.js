import React from 'react'
import './About-section.css'
import AboutSectionImg from '../../../assets/images/about-section-img'
import { Link } from 'react-router-dom'
import { useData } from '../../../contexts/contexts'

const AboutSection = () => {
  const { color } = useData()

  const coloring = {
    color: color
  }

  return (
    <section id='about-section'>
        <div className="about-section__container">
            <img src={AboutSectionImg} className="about-section__img" alt="about section img" />
            <div className='about-section__text'>
                <h2 className='about-section__title' style={coloring}>About this project</h2>
                <p className='about-section__parag' style={coloring}>First of all, We are Muzaffar and Abdulaziz, who are working on this project. Both of us are adding new stuffs for our products permanently. In the future this project is gonna be like <Link to="https://www.amazon.com" className='about-section__link'>Amazon</Link> or <Link to="https://www.alibaba.com" className='about-section__link'>AliBaba</Link>. So that we hope, our Project will be the most high-demanded one!</p>
                <Link to={'/'} className='about-section_btn'>Go to home</Link>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;