import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../../assets/image/logo-1.png';
import { useData } from '../../contexts/contexts';
import './Footer.css';
const Footer = () => {
    const {footerBackground} = useData()
  return (
    <footer style={{backgroundColor:footerBackground}}>
        <div className='footer__container'>
            <Link to='/'>
                <img className='footer__logo' src={logo1} alt='logo' />
            </Link>
            <nav className='footer__navbar'>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a href='https://www.github.com/' className='footer__link' >
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://www.facebook.com/' className='footer__link' >
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://www.instagram.com/' className='footer__link' >
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://www.telegram.org/' className='footer__link' >
                        <i class="fa-brands fa-telegram"></i>
                        </a>
                    </li>
                    <li className='footer__item'>
                        <a href='https://www.twitter.com/' className='footer__link' >
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='footer__reserved'>
        <p>mashop.uz © 2022 All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer;