import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/logo.png";


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
              <Link className="header__link" to="/">
                <i class="fa-solid fa-house"></i>
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link className="header__link" to="/about">
              <i class="fa-solid fa-circle-info"></i>
                About
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link className="header__link" to="/contact">
              <i class="fa-solid fa-user"></i>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
