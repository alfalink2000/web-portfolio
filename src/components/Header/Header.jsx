import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  RiFacebookFill,
  RiWhatsappFill,
  RiTelegramFill,
  RiGithubFill,
  RiCodeSSlashLine,
  RiMenuLine,
  RiCloseLine,
  RiArrowDownLine,
} from "react-icons/ri";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import img from "../../assets/images/fondo1.webp";
import imgperfil from "../../assets/images/imgperfil1.webp";
import pdf from "../../assets/documents/Currículum.pdf";

import "../../styles/Header/HeaderDos.css";

export const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const [isBorderActive, setIsBorderActive] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const navBackground = useTransform(
    useScroll().scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"]
  );

  const sections = [
    { id: "inicio", name: language === "es" ? "Inicio" : "Home" },
    { id: "conoceme", name: language === "es" ? "Sobre mí" : "About me" },
    { id: "habilidades", name: language === "es" ? "Habilidades" : "Skills" },
    { id: "beneficios", name: language === "es" ? "Beneficios" : "Benefits" },
    { id: "proyectos", name: language === "es" ? "Servicios" : "Services" },
    { id: "contacto", name: language === "es" ? "Contacto" : "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition + 100 >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Pequeño retraso para permitir que el menú se cierre antes del scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const baseOffset = window.innerWidth <= 768 ? -20 : -80;
        const additionalOffset = sectionId === "conoceme" ? 80 : 0;

        window.scrollTo({
          top: element.offsetTop + baseOffset + additionalOffset,
          behavior: "smooth",
        });
      }
    }, 100); // 100ms de retraso
  };

  const downloadCV = () => {
    const fileUrl = pdf;

    // Crear un enlace temporal
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download =
      language === "es" ? "CV_Leonel_Machin.pdf" : "Leonel_Machin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.header
        className="header-fullscreen"
        ref={headerRef}
        style={{ background: navBackground }}
      >
        <nav className="header-nav">
          <div className="header-nav-content">
            <div className="header-logo">
              <motion.div
                className="header-logo-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="header-logo-initial" translate="no">
                  P
                </span>
              </motion.div>
              <span className="header-logo-text" translate="no">
                {language === "es" ? "Portafolio" : "Portfolio"}
              </span>
            </div>

            <div className="header-desktop-nav">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleLinkClick(e, section.id)}
                    className={`header-nav-link ${
                      activeSection === section.id
                        ? "header-nav-link-active"
                        : ""
                    }`}
                  >
                    {section.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="header-desktop-nav">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <motion.button
                className="header-btn-outline"
                onClick={downloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "es" ? "Descargar CV" : "Download CV"}
              </motion.button>
              <motion.button
                onClick={(e) => {
                  handleLinkClick(e, "contacto");
                }}
                className="header-btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "es" ? "Contáctame" : "Contact Me"}
              </motion.button>
            </div>

            <motion.button
              className="header-mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="header-mobile-menu-icon">
                {isMenuOpen ? (
                  <RiCloseLine size={24} />
                ) : (
                  <RiMenuLine size={24} />
                )}
              </div>
            </motion.button>
          </div>

          {/* Menú desplegable mejorado */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay con blur */}
                <motion.div
                  className="header-mobile-menu-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                />

                {/* Menú móvil */}
                <motion.div
                  className="header-mobile-menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="header-mobile-menu-content">
                    <div className="header-mobile-language-switcher">
                      <LanguageSwitcher
                        language={language}
                        setLanguage={setLanguage}
                        mobile
                      />

                      <hr />
                    </div>

                    {sections.map((section) => (
                      <motion.div
                        key={section.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <a
                          href={`#${section.id}`}
                          onClick={(e) => handleLinkClick(e, section.id)}
                          className={`header-mobile-nav-link ${
                            activeSection === section.id
                              ? "header-mobile-nav-link-active"
                              : ""
                          }`}
                        >
                          {section.name}
                        </a>
                      </motion.div>
                    ))}

                    <div className="header-mobile-menu-buttons">
                      <motion.button
                        className="header-btn-outline"
                        onClick={downloadCV}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {language === "es" ? "Descargar CV" : "Download CV"}
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          handleLinkClick(e, "contacto");
                        }}
                        className="header-btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {language === "es" ? "Contáctame" : "Contact Me"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>

        <section
          id="inicio"
          className="hero-section"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            backgroundBlendMode: "overlay",
          }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-gradient-circle-1"></div>
          <div className="hero-gradient-circle-2"></div>
          <div className="hero-gradient-circle-3"></div>

          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text-content">
                <div className="hero-text-group">
                  <p className="hero-greeting">
                    {language === "es" ? "¡Hola! Soy" : "Hi! I'm"}
                  </p>
                  <h1 className="hero-title">
                    {language === "es" ? "Desarrollador" : "Developer"}
                    <span className="hero-title-gradient">
                      {" "}
                      {language === "es" ? "Web FullStack" : "FullStack Web"}
                    </span>
                  </h1>
                  <p className="hero-subtitle">
                    {language === "es"
                      ? "Creo experiencias digitales increíbles combinando diseño atractivo con código limpio y funcional."
                      : "I create amazing digital experiences combining attractive design with clean and functional code."}
                  </p>
                </div>
                <div className="hero-actions">
                  <motion.button
                    onClick={() => {
                      setIsBorderActive(true);

                      const messages =
                        language === "es"
                          ? [
                              "¡Encantado de comenzar!",
                              "¡Manos a la obra!",
                              "¡Construyamos algo increíble!",
                              "¡Listo para colaborar!",
                              "¡Empecemos esta aventura digital!",
                              "¡Código listo para despegar! 🚀",
                              "¡Transformemos tu visión en código!",
                              "¡Desarrollo en marcha! 💻",
                              "¡Innovación en proceso!",
                              "¡Solución técnica activada!",
                              "¡Preparado para crear magia digital!",
                              "¡Tu proyecto está en buenas manos!",
                            ]
                          : [
                              "Delighted to start!",
                              "Let's get to work!",
                              "Let's build something amazing!",
                              "Ready to collaborate!",
                              "Let's start this digital adventure!",
                              "Code ready for takeoff! 🚀",
                              "Let's turn your vision into code!",
                              "Development underway! 💻",
                              "Innovation in progress!",
                              "Technical solution activated!",
                              "Ready to create digital magic!",
                              "Your project is in good hands!",
                            ];

                      // Seleccionar un mensaje diferente al actual
                      let newMessage;
                      do {
                        newMessage =
                          messages[Math.floor(Math.random() * messages.length)];
                      } while (
                        newMessage === randomMessage &&
                        messages.length > 1
                      );

                      setRandomMessage(newMessage);

                      setTimeout(() => {
                        setIsBorderActive(false);
                      }, 3000);
                    }}
                    className="hero-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isBorderActive} // Deshabilita el botón durante la animación
                  >
                    {language === "es"
                      ? "Trabajemos Juntos"
                      : "Let's Work Together"}
                  </motion.button>
                  <motion.button
                    onClick={(e) => handleLinkClick(e, "proyectos")}
                    className="hero-btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === "es" ? "Ver Proyectos" : "View Projects"}
                  </motion.button>
                </div>

                <div className="hero-social-container">
                  <div className="hero-social-icons">
                    {[
                      {
                        icon: (
                          <RiGithubFill
                            className="social-icon-github"
                            size={24}
                          />
                        ),
                        url: "https://github.com/alfalink2000",
                      },
                      {
                        icon: (
                          <RiFacebookFill
                            className="social-icon-facebook"
                            size={24}
                            style={{ color: "#1877f2" }} // Azul Facebook como fallback
                          />
                        ),
                        url: "https://www.facebook.com/share/16AEYuDD6n/",
                      },
                      {
                        icon: (
                          <RiWhatsappFill
                            className="social-icon-watsapp"
                            size={24}
                            style={{ color: "#0faa48ff" }} // Verde WhatsApp
                          />
                        ),
                        url: "https://wa.me/5352880034",
                      },
                      {
                        icon: (
                          <RiTelegramFill
                            className="social-icon-Telegram"
                            size={24}
                            style={{ color: "#cc0033c5" }} // Azul Telegram
                          />
                        ),
                        url: "https://t.me/alfalink2000",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-icon backdrop-blur-sm"
                        whileHover={{
                          y: -3,
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div className="hero-stats">
                  {[
                    {
                      value: "3+",
                      label:
                        language === "es"
                          ? "Años de Experiencia"
                          : "Years of Experience",
                    },
                    {
                      value: "50+",
                      label:
                        language === "es"
                          ? "Proyectos Completados"
                          : "Projects Completed",
                    },
                    {
                      value: "30+",
                      label:
                        language === "es"
                          ? "Clientes Satisfechos"
                          : "Happy Clients",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="hero-stat-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="hero-stat-value">{stat.value}</div>
                      <div className="hero-stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="hero-image-container">
                {/* Mensaje emergente */}
                <div
                  className={`weld-message ${isBorderActive ? "active" : ""}`}
                >
                  {randomMessage}
                </div>
                <div className="hero-image-bg"></div>

                <motion.div
                  className={`hero-profile-image ${
                    isBorderActive ? "weld-effect" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={imgperfil}
                    alt="Perfil profesional"
                    className="hero-profile-img"
                  />
                </motion.div>
                <motion.div
                  className="hero-status-badge"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="hero-status-content">
                    <div className="hero-status-indicator"></div>
                    <span className="hero-status-text">
                      {language === "es"
                        ? "Disponible para proyectos"
                        : "Available for projects"}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="hero-code-badge"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="hero-code-content">
                    <div className="hero-code-icon">
                      <RiCodeSSlashLine className="text-white text-xl" />{" "}
                      {/* Icono centrado */}
                    </div>
                    <div>
                      <div className="hero-code-title">
                        {" "}
                        {language === "es" ? "Código Limpio" : "Clean Code"}
                      </div>
                      <div className="hero-code-subtitle">
                        {language === "es"
                          ? "Mejores Prácticas"
                          : "Best Practices"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-scroll-indicator"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
            onClick={(e) => handleLinkClick(e, "conoceme")}
            style={{ cursor: "pointer" }}
          >
            <div className="hero-scroll-icon">
              <RiArrowDownLine color="white" size={24} />
            </div>
          </motion.div>
        </section>
      </motion.header>
    </>
  );
};
