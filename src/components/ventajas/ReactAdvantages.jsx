import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/ventajas/ReactAdvantages.css";

export const ReactAdvantages = ({ language }) => {
  const [activeCard, setActiveCard] = useState(0);

  const advantages =
    language === "es"
      ? [
          {
            title: "⚡ Rendimiento Brutal",
            description:
              "Virtual DOM y reconciliación inteligente para actualizaciones ultra rápidas",
            example: "Aplicaciones con miles de elementos interactivos sin lag",
            emoji: "🚀",
          },
          {
            title: "🧩 Componentes Reutilizables",
            description: "Construye una vez, úsalos en cualquier proyecto",
            example:
              "Crea tu biblioteca personal de UI (botones, modales, etc.)",
            emoji: "♻️",
          },
          {
            title: "🌎 Comunidad Gigante",
            description: "Soluciones para cualquier problema ya documentado",
            example: "Librerías especializadas para cualquier necesidad",
            emoji: "👥",
          },
          {
            title: "💡 JSX = HTML + Superpoderes",
            description: "Escribe HTML con lógica de JavaScript incorporada",
            example:
              "Renderizado condicional sencillo: {isLogged && <Dashboard/>}",
            emoji: "🦸",
          },
          {
            title: "📱 Aplicaciones Isomórficas",
            description:
              "Mismo código para frontend y backend (Next.js, Gatsby)",
            example: "Renderizado en servidor para mejor SEO y performance",
            emoji: "🔃",
          },
          {
            title: "🛠️ Herramientas Profesionales",
            description: "DevTools, React Strict Mode y testing integrado",
            example: "Depuración avanzada con React Developer Tools",
            emoji: "🧰",
          },
        ]
      : [
          {
            title: "⚡ Brutal Performance",
            description:
              "Virtual DOM and smart reconciliation for ultra-fast updates",
            example: "Apps with thousands of interactive elements without lag",
            emoji: "🚀",
          },
          {
            title: "🧩 Reusable Components",
            description: "Build once, use in any project",
            example: "Create your personal UI library (buttons, modals, etc.)",
            emoji: "♻️",
          },
          {
            title: "🌎 Huge Community",
            description: "Documented solutions for any problem",
            example: "Specialized libraries for any need",
            emoji: "👥",
          },
          {
            title: "💡 JSX = HTML + Superpowers",
            description: "Write HTML with built-in JavaScript logic",
            example: "Easy conditional rendering: {isLogged && <Dashboard/>}",
            emoji: "🦸",
          },
          {
            title: "📱 Isomorphic Apps",
            description: "Same code for frontend and backend (Next.js, Gatsby)",
            example: "Server-side rendering for better SEO and performance",
            emoji: "🔃",
          },
          {
            title: "🛠️ Professional Tools",
            description: "DevTools, React Strict Mode and built-in testing",
            example: "Advanced debugging with React Developer Tools",
            emoji: "🧰",
          },
        ];

  const texts = {
    mainTitle:
      language === "es"
        ? "¿Por qué React revoluciona el Frontend?"
        : "Why React revolutionizes Frontend?",
    subtitle:
      language === "es"
        ? "La experiencia de desarrollo que cambiará tu forma de crear webs"
        : "The development experience that will change how you build websites",
    exampleLabel: language === "es" ? "Ejemplo: " : "Example: ",
    conclusion:
      language === "es"
        ? "Aplicaciones más rápidas de desarrollar, con mejor rendimiento y mantenibles a largo plazo."
        : "Faster to develop applications, with better performance and long-term maintainability.",
    ctaButton:
      language === "es"
        ? "Quiero mi proyecto en React →"
        : "I want my React project →",
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Ajusta este valor según tu navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Animación para las tarjetas
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    },
  };
  return (
    <section id="beneficios" className="react-advantages">
      <div className="ventajas-container">
        {/* Esferas en movimiento con animación */}
        <motion.div
          className="moving-sphere"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="moving-sphere"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="moving-sphere"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Encabezado con animación */}
        <motion.div
          className="react-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === "es" ? "¿Por qué " : "Why "}{" "}
            <motion.span
              className="react-highlight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              React
            </motion.span>{" "}
            {language === "es"
              ? " revoluciona el Frontend?"
              : " revolutionizes Frontend?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {texts.subtitle}
          </motion.p>
        </motion.div>

        {/* Tarjetas de ventajas con animación */}
        <motion.div
          className="advantage-cards"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className={`card ${activeCard === index ? "active" : ""}`}
              onClick={() => setActiveCard(index)}
              style={{ "--emoji": `"${item.emoji}"` }}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.h3
                whileHover={{ color: "#61dafb" }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </motion.p>
              <motion.div
                className="example-badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {texts.exampleLabel}
                {item.example}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusión con animación */}
        <motion.div
          className="conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.strong
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {language === "es" ? "Resultado final: " : "End result: "}
            </motion.strong>{" "}
            {texts.conclusion}
          </motion.p>

          <motion.button
            className="cta-button"
            onClick={(e) => handleSmoothScroll(e, "contacto")}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(97, 218, 251, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {texts.ctaButton}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
