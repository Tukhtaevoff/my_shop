import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <nav className="footer__navbar">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link className="footer__link" to="/">
              <i class="fa-solid fa-house"></i>
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link className="footer__link" to="/about">
              <i class="fa-solid fa-circle-info"></i>
                About
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link className="footer__link" to="/contact">
              <i class="fa-solid fa-user"></i>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
