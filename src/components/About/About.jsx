import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../assets/images/8.1.webp";
import img1 from "../../assets/images/upr.webp";
import img2 from "../../assets/images/title.webp";
import img3 from "../../assets/images/10.webp";

import "../../styles/About/About.css";

export const About = ({ language }) => {
  const downloadCV = () => {
    const fileUrl = "../../../public/assets/documents/Currículum.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download =
      language === "es" ? "CV_Leonel_Machin.pdf" : "Leonel_Machin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="conoceme" className="about-section">
      {/* Esferas en movimiento */}
      <div className="moving-sphere"></div>
      <div className="moving-sphere"></div>
      <div className="moving-sphere"></div>

      {/* Punto de anclaje para el scroll */}
      <div id="aboutme" className="scrolled-1" />

      <div className="about-container">
        {/* Título con efecto de entrada */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {language === "es" ? "Sobre Mí" : "About Me"}
        </motion.h2>

        <div className="about-grid">
          {/* Contenedor de imagen con efectos */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <motion.img
                src={img}
                alt="Leonel Machin"
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Contenido con efectos escalonados */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p
              className="about-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === "es" ? (
                <>
                  ¡Hola! Soy <span className="highlight">Leonel Machin</span>,
                  Ingeniero Informático y Desarrollador Full Stack con
                  especialización en React.
                </>
              ) : (
                <>
                  Hi! I'm <span className="highlight">Leonel Machin</span>,
                  Computer Engineer and Full Stack Developer specialized in
                  React.
                </>
              )}
            </motion.p>

            <motion.div className="about-details">
              {(language === "es"
                ? [
                    "💻 Creo soluciones digitales robustas y escalables que combinan funcionalidad impecable con diseño atractivo.",
                    "🚀 Especialista en React.js y arquitecturas modernas, me apasiona escribir código limpio y bien estructurado.",
                    "🎯 En mis proyectos priorizo la experiencia de usuario y el alto rendimiento, superando expectativas técnicas y de negocio.",
                    "🌱 Cuando no estoy programando, me encuentras aprendiendo sobre diseño UX/UI o explorando nuevas tecnologías.",
                  ]
                : [
                    "💻 I create robust and scalable digital solutions combining flawless functionality with attractive design.",
                    "🚀 React.js specialist and modern architectures expert, passionate about writing clean and well-structured code.",
                    "🎯 In my projects I prioritize user experience and high performance, exceeding technical and business expectations.",
                    "🌱 When I'm not coding, you'll find me learning about UX/UI design or exploring new technologies.",
                  ]
              ).map((text, index) => (
                <motion.p
                  key={index}
                  className="about-detail-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.div
                className="cv-download-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.button
                  className="cv-download-btn"
                  onClick={downloadCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "es" ? "Descargar CV" : "Download CV"}
                  <span className="pulse-effect"></span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Segunda sección con timeline */}
        <div className="about-grid-two secondary-section">
          <div className="moving-sphere"></div>
          <div className="moving-sphere"></div>
          <div className="moving-sphere"></div>
          <motion.div
            className="about-content-second"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="section-subtitle-one"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Mi Trayectoria
            </motion.h3>

            <div className="timeline">
              {(language === "es"
                ? [
                    {
                      title: "Título de Ingeniero Informático",
                      institution: "Universidad Hermanos Saíz Montes de Oca",
                      period: "2019-2023",
                      achievements: [],
                    },
                    {
                      title: "Ponente Nacional",
                      project: "Sistema de Informatización para la Salud",
                      period: "2023-2024",
                      achievements: [
                        "Desarrollo de solución integral para informatización hospitalaria",
                      ],
                    },
                    {
                      title: "Desarrollador de Software Freelance",
                      service: "Soluciones personalizadas desde mi estudio",
                      period: "2024-Actualidad",
                      achievements: [
                        "Desarrollo de aplicaciones web y móviles",
                      ],
                    },
                  ]
                : [
                    {
                      title: "Computer Engineering Degree",
                      institution: "Hermanos Saíz Montes de Oca University",
                      period: "2019-2023",
                      achievements: [],
                    },
                    {
                      title: "National Speaker",
                      project: "Health Informatization System",
                      period: "2023-2024",
                      achievements: [
                        "Development of comprehensive hospital informatization solution",
                      ],
                    },
                    {
                      title: "Freelance Software Developer",
                      service: "Custom solutions from my studio",
                      period: "2024-Present",
                      achievements: ["Web and mobile applications development"],
                    },
                  ]
              ).map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index < 2 && <div className="marker-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p className="timeline-description">
                      {item.institution && (
                        <span className="institution">{item.institution}</span>
                      )}
                      {item.project && (
                        <span className="project">{item.project}</span>
                      )}
                      {item.service && (
                        <span className="service">{item.service}</span>
                      )}
                      <span className="timeline-period">{item.period}</span>
                    </p>
                    {item.achievements.length > 0 && (
                      <ul className="timeline-achievements">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imágenes superpuestas con efectos */}
          <motion.div
            className="stacked-images-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-stack">
              <motion.img
                src={img1}
                alt="Proyecto 1"
                className="stacked-image image-1"
                whileHover={{ zIndex: 4, scale: 1.05, rotate: 0 }}
              />
              <motion.img
                src={img2}
                alt="Proyecto 2"
                className="stacked-image image-2"
                whileHover={{ zIndex: 4, scale: 1.05, rotate: 0 }}
              />
              <motion.img
                src={img3}
                alt="Proyecto 3"
                className="stacked-image image-3"
                whileHover={{ zIndex: 4, scale: 1.05, rotate: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
