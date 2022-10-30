import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className="navbar__list-item">
                <Link className="link" to="/about">About</Link>
              </li>
              <li className="navbar__list-item">
                <Link className="link" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;
