import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../../styles/Footer/Footer.css";

export const Footer = ({ language }) => {
  const texts = {
    contact: language === "es" ? "Contacto" : "Contact",
    social: language === "es" ? "Redes Sociales" : "Social Media",
    rights:
      language === "es"
        ? "Todos los derechos reservados"
        : "All rights reserved",
    links: {
      whatsapp: language === "es" ? "WhatsApp" : "WhatsApp",
      email: language === "es" ? "Correo" : "Email",
      telegram: language === "es" ? "Telegram" : "Telegram",
      facebook: language === "es" ? "Facebook" : "Facebook",
      github: language === "es" ? "GitHub" : "GitHub",
      linkedin: language === "es" ? "LinkedIn" : "LinkedIn",
    },
  };

  return (
    <footer className="compact-footer">
      {/* Esferas decorativas */}
      <div className="footer-sphere sphere-left"></div>
      <div className="footer-sphere sphere-right"></div>

      <div className="footer-grid">
        {/* Columna de Contacto */}
        <div className="footer-column contact-section-footer">
          <h4>{texts.contact}</h4>
          <div className="contact-list">
            <a href="https://wa.me/52880034" className="contact-link">
              <FaWhatsapp /> {texts.links.whatsapp}: 52880034
            </a>
            <a href="mailto:alfalink2000@gmail.com" className="contact-link">
              <FiMail /> {texts.links.email}: alfalink2000@gmail.com
            </a>
            <a href="https://t.me/alfalink2000" className="contact-link">
              <FaTelegram /> {texts.links.telegram}: @alfalink2000
            </a>
          </div>
        </div>

        <div className="footer-column social-section">
          <h4>{texts.social}</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/16AEYuDD6n/"
              className="social-link"
            >
              <FaFacebook /> {texts.links.facebook}
            </a>
            <a href="https://github.com/alfalink2000" className="social-link">
              <FaGithub /> {texts.links.github}
            </a>
            <a
              href="https://www.linkedin.com/in/leonel-machin-remis-7104b3286/"
              className="social-link"
            >
              <FaLinkedin /> {texts.links.linkedin}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Leonel Machin Remis</p>
        <p>{texts.rights}</p>
      </div>
    </footer>
  );
};
