import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../contexts/contexts";
import "./Contact-section.css";

const ContactSection = () => {
  const { color } = useData();

  const divStyles = {
    flex: "6",
    display: "flex",
    flexDirection: "column"
  }

  const textStyles = {
    fontSize: "24px",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "3rem",
  }

  const linkStyles = {
    width: "160px", 
    margin: "0 auto"
  }

  const imageStyles = { 
    border: "0", 
    flex: "6" 
  }

  return (
    <section className="contact-section">
      <div className="contact-section__container" style={{ color: color }}>
        <h2 className="contact-section__title">Our maps</h2>
        <div className="contact-section__wrapper">
          <div style={divStyles}>
            <p
              style={textStyles}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              expedita, tenetur molestiae voluptates aspernatur saepe veniam
              vero. Distinctio doloribus laudantium dolores. Consequatur
              corrupti obcaecati neque. Nisi quis ullam possimus cupiditate.
            </p>
            <Link className="about-section_btn" style={linkStyles} to={'/about'}>
              About us
            </Link>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.885017805844!2d69.2750697964117!3d41.31136492409726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2930779209%3A0xd22a0d12e799d915!2z0J_QsNC80Y_RgtC90LjQuiDQkNC80LjRgNGDINCi0LjQvNGD0YDRgw!5e0!3m2!1sru!2s!4v1668930436617!5m2!1sru!2s"
            title="tashkent Amir Temur map"
            width="600"
            height="450"
            style={imageStyles}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
