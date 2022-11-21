import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <>
    <section className='hero__section'>
      <div className='hero__container'>
      <h1 className='hero__title'>About Our Shop</h1>
      <p className='hero__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam quos earum pariatur praesentium mollitia quod debitis, inventore reprehenderit dicta quia nulla! Maiores inventore error aliquid nihil laboriosam magni ex.</p>
      <a className='more' href='#about'>More<i class="fa-solid fa-arrow-down"></i></a>
      </div>
    </section>  
    </>
  )
}

export default HeroSection