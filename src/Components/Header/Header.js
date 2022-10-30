import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/logo.jpg"
const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link>
          <img className='logo' src={logo} alt={logo} />
        </Link>
        <div className='navbar-container'>
          <nav className='navbar'>
              <ul className='navbar__list'>
                  <li className='list-item'>
                     <Link className='item-link' to='/'>Home</Link> 
                  </li>
                  <li className='list-item'>
                     <Link className='item-link' to='/about'>About</Link> 
                  </li>
                  <li className='list-item'>
                  <Link className='item-link' to='/contact'>Contact</Link> 
                  </li>
              </ul>
          </nav>
        </div>
        </div>
    </header>
  )
}

export default Header