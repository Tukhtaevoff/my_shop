import React from 'react'
import ContactIntro from '../../Components/ContactIntro/ContactIntro'
import ContactSection from '../../Components/ContactSection/ContactSection'
import './Contact.css'
const Contact = () => {
  return (
    <main className='contact__main'>
      <ContactIntro />
      <ContactSection />
    </main>
  )
}

export default Contact