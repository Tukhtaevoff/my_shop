import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/image/logo-1.png"
import { useData } from '../../contexts/contexts'
const Header = () => {
  const {setBlackText,blackText,blueText,setBlueText,setAppBackground,appBackground,footerBackground , setFooterBackground, color,setColor,moon,setMoon,headerBackground,setHeaderBackground} = useData();
  return (
    <header style={{backgroundColor:headerBackground}}>
      <div className='container'>
        <Link>
          <img className='logo' src={logo} alt={logo} />
        </Link>
        <div className='navbar-container'>
          <nav className='navbar'>
              <ul className='navbar__list'>
                  <li className='list-item'>
                     <Link style={{color:color}} className='item-link' to='/'>Home</Link> 
                  </li>
                  <li className='list-item'>
                     <Link style={{color:color}} className='item-link' to='/about'>About</Link> 
                  </li>
                  <li className='list-item'>
                  <Link style={{color:color}} className='item-link' to='/contact'>Contact</Link> 
                  </li>
                  <li>
                  <button className='moon-sun' style={{color:color}} 
                  onClick={()=> {
                    setHeaderBackground(headerBackground === 'white' ? '#303030' : 'white')
                    setMoon(!moon)
                    setColor(color === 'indigo' ? 'white' : 'indigo')
                    setFooterBackground(footerBackground === 'indigo' ? '#303030' : 'indigo')
                    setAppBackground(appBackground === 'white'? '#383838' : 'white')
                    setBlueText(blueText === 'blue'? 'white' : 'blue')
                    setBlackText(blackText === 'black'? 'white' : 'black')
                  }}>
                    {
                      moon ? (<i class="fa-solid fa-sun"></i>) : (<i class="fa-solid fa-moon"></i>)
                    }
                  </button>
                  </li>
              </ul>
          </nav>
        </div>
        </div>
    </header>
  )
}

export default Header