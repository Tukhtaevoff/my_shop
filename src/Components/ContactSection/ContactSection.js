import React from 'react'
import './ContactSection.css'
import { useData } from '../../contexts/contexts'
const ContactSection = () => {
  const {blueText} = useData()
  return (
    <section className='contact__section'>
        <div className='contact__container'>
           <h2 style={{color:blueText}} className='contact__title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam quos earum pariatur praesentium mollitia quod debitis, inventore reprehenderit dicta quia nulla! Maiores inventore error aliquid nihil laboriosam magni ex.</h2> 
           <div className='contact__map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.885017805844!2d69.2750697964117!3d41.31136492409726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2930779209%3A0xd22a0d12e799d915!2z0J_QsNC80Y_RgtC90LjQuiDQkNC80LjRgNGDINCi0LjQvNGD0YDRgw!5e0!3m2!1sru!2s!4v1668930436617!5m2!1sru!2s" title="tashkent Amir Temur map" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
        </div>
    </section>
  )
}

export default ContactSection