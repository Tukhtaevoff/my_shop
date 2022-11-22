import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/contexts";

const Footer = () => {
  const {footerBackground} = useData();

  const footerStyle = {
    backgroundColor: footerBackground
  }
  
  return (
    <footer style={footerStyle} className="footer">
      <div className="footer__container">
        <div className="footer-link__wrapper">
          <Link to={"/"}>
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className="footer__navbar">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <a className="footer__link" href="https://github.com/">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="footer__link" href="https://www.facebook.com/">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="footer__link" href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="footer__link" href="https://www.telegram.org/">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a className="footer__link" href="https://twitter.com/">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__reserved">
        <p>mashop.uz © 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
