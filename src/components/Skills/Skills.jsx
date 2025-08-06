import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Skills/Skills.css";

import reacticon from "../../assets/icons/react.png?url";
import api from "../../assets/icons/api.png?url";
import css from "../../assets/icons/css.png?url";
import express from "../../assets/icons/express.png?url";
import graph from "../../assets/icons/graph.png?url";
import html from "../../assets/icons/html.png?url";
import javascript from "../../assets/icons/javascript.png?url";
import mysql from "../../assets/icons/mysql.png?url";
import node from "../../assets/icons/node.png?url";
import redux from "../../assets/icons/redux.png?url";
import vite from "../../assets/icons/vite.png?url";

export const Skills = ({ language }) => {
  const texts = {
    title: language === "es" ? "Habilidades Técnicas" : "Technical Skills",
    subtitle:
      language === "es"
        ? "Tecnologías que domino y uso regularmente"
        : "Technologies I master and regularly use",
    categories: {
      frontend: language === "es" ? "Frontend" : "Frontend",
      backend: language === "es" ? "Backend" : "Backend",
      other: language === "es" ? "Otras Tecnologías" : "Other Technologies",
    },
  };

  const frontendSkills = [
    { name: "HTML", level: 100, icon: html },
    { name: "CSS/Sass", level: 100, icon: css },
    { name: "JavasCript", level: 90, icon: javascript },
    { name: "React.js", level: 95, icon: reacticon },
    { name: "Redux", level: 95, icon: redux },
    { name: "Vite.js", level: 90, icon: vite },
  ];
  const backendSkills = [
    { name: "Node.js", level: 88, icon: node },
    { name: "Express", level: 80, icon: express },
    { name: "Javascript", level: 90, icon: javascript },
    { name: "REST APIs", level: 90, icon: api },
    { name: "MySQL", level: 95, icon: mysql },
    { name: "GraphQL", level: 89, icon: graph },
  ];

  const otherSkills = [
    { name: "Git", level: 85, icon: "🌿" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "Canva", level: 75, icon: "🎨" },
    { name: "Scrum", level: 80, icon: "🔄" },
    { name: "Webpack", level: 65, icon: "📦" },
    { name: "Postman", level: 65, icon: "🔗" },
  ];

  const barAnimation = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1.5, delay: 0.3 },
    }),
  };

  return (
    <section id="habilidades" className="skills-section">
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

      <div className="skills-container">
        {/* Título con efecto de entrada */}
        <motion.div
          className="subtitles"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="title-decorator"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              //
            </motion.span>{" "}
            {texts.title}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {texts.subtitle}
          </motion.p>
        </motion.div>

        <div className="skills-grid">
          {/* Categoría Frontend */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="category-header">
              <motion.h3
                className="category-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.span
                  className="title-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                >
                  💻
                </motion.span>{" "}
                {texts.categories.frontend}
              </motion.h3>
              <motion.div
                className="category-decoration"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={`front-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillBar skill={skill} barAnimation={barAnimation} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categoría Backend */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="category-header">
              <motion.h3
                className="category-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.span
                  className="title-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
                >
                  🖥️
                </motion.span>{" "}
                {texts.categories.backend}
              </motion.h3>
              <motion.div
                className="category-decoration"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={`back-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <SkillBar skill={skill} barAnimation={barAnimation} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Otras Tecnologías */}
          <motion.div
            className="skill-category full-width"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="category-header">
              <motion.h3
                className="category-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.span
                  className="title-icon"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 1.5 }}
                >
                  🛠️
                </motion.span>{" "}
                {texts.categories.other}
              </motion.h3>
              <motion.div
                className="category-decoration"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
            <div className="skills-list">
              <motion.div
                className="skills-grid-mini"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {otherSkills.map((skill, index) => (
                  <motion.div
                    key={`other-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: index * 0.1 + 0.3,
                    }}
                  >
                    <SkillPill skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente SkillBar
const SkillBar = ({ skill, barAnimation }) => (
  <div className="skill-item">
    <div className="skill-info">
      <motion.span
        className="skill-icon"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {typeof skill.icon === "string" &&
        /\.(png|jpg|jpeg|webp)$/.test(skill.icon) ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="skill-icon-img"
            width="24"
            height="24"
            loading="lazy"
          />
        ) : (
          skill.icon
        )}
      </motion.span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-percent">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <motion.div
        className="skill-progress"
        variants={barAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={skill.level}
        data-level={skill.level}
      />
    </div>
  </div>
);

// Componente SkillPill
const SkillPill = ({ skill }) => (
  <motion.div
    className="skill-pill"
    whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
  >
    <motion.span
      className="pill-icon"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, delay: Math.random() * 2 }}
    >
      {skill.icon}
    </motion.span>
    <span className="pill-name">{skill.name}</span>
    <div className="pill-level" style={{ width: `${skill.level}%` }}></div>
  </motion.div>
);
