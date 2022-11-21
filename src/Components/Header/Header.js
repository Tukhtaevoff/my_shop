import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { useData } from "../../contexts/contexts";

const Header = () => {
  const { appBackground, setAppBackground, headerBackground, setHeaderBackground, footerBackground, setFooterBackground, moon, setMoon, color, setColor } = useData();

  return (
    <header style={{ backgroundColor: headerBackground }}>
      <div className="container header__container">
        <div className="header-link__wrapper">
          <Link to={"/"}>
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link style={{color: color}} className="header__link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link style={{color: color}} className="header__link" to="/about">
                About
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link style={{color: color}} className="header__link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="navbar__list-item">
              <button className="moon-btn"
                onClick={() => {
                  setHeaderBackground(
                    headerBackground === "white" ? "#303030" : "white"
                  );
                  setMoon(!moon);
                  setColor(color === "black" ? "white" : "black")
                  setFooterBackground(footerBackground === "indigo" ? "#303030" : "indigo")
                  setAppBackground(appBackground === "white" ? "#383838" : "white")
                }}
              >
                {moon ? (
                  <i style={{color: color}} class="fa-solid fa-sun"></i>
                ) : (
                  <i class="fa-solid fa-moon"></i>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
