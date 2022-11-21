import React from 'react'
import './Hero.css';
import AboutSection from '../About-section/About-section';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='about__hero'>
        <div className='about__hero-container'>
            <h1 className='hero__title'>About our shop</h1>
            <p className="hero__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam quos earum pariatur praesentium mollitia quod debitis, inventore reprehenderit dicta quia nulla! Maiores inventore error aliquid nihil laboriosam magni ex.</p>
            <a className='about__btn' href='#about-section'>
              About us <i class="fa-solid fa-arrow-down"></i>
            </a>
        </div>
    </section>
  )
}

export default Hero