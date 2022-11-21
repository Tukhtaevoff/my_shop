import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/image/about-section-img.avif'
import './AboutSection.css'
import { useData } from '../../contexts/contexts'
const AboutSection = () => {
  const {blueText} = useData()
  return (
    <section id='about' className='about__section'>
        <div className='about__container'>
            <img className='about__img' src={aboutImg} alt='about-img' />
            <div className='about-section__text'>
            <h2  style={{color:blueText}} className='about__title'>About this project</h2>
                <p style={{color:blueText}} className='about__parag'>First of all, We are Muzaffar and Abdulaziz, who are working on this project. Both of us are adding new stuff for our products permanently. In the future this project is gonna be like <Link to="https://www.amazon.com">Amazon</Link> or <Link to="https://www.alibaba.com">AliBaba</Link>. So that we hope, our Project will be the most high-demanded one!</p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection