import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgdescription1 from "../../assets/images/p1.webp";
import imgdescription2 from "../../assets/images/p2.webp";
import imgdescription3 from "../../assets/images/p3.webp";

import imgdescription11 from "../../assets/images/p1-1.webp";
import imgdescription22 from "../../assets/images/p2-2.webp";
import imgdescription33 from "../../assets/images/p3-1.webp";

import img from "../../assets/images/carr1.webp";
import img1 from "../../assets/images/carr2.webp";
import img2 from "../../assets/images/carr3.webp";
import img3 from "../../assets/images/carr4.webp";
import img4 from "../../assets/images/carr13.webp";
import img5 from "../../assets/images/carr5.webp";
import img6 from "../../assets/images/carr6.webp";
import img7 from "../../assets/images/carr7.webp";
import img8 from "../../assets/images/carr8.webp";
import img9 from "../../assets/images/carr9.webp";
import img10 from "../../assets/images/carr10.webp";
import img11 from "../../assets/images/carr11.webp";
import img12 from "../../assets/images/carr12.webp";
import "../../styles/Projects/Projects.css";

export const Projects = ({ language }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const projects = {
    es: [
      {
        id: 1,
        title: "Blog Personal",
        description:
          "Tu espacio digital para crear, conectar y crecer profesionalmente",
        images: [imgdescription1, imgdescription11],
        details: "Desarrollo de blogs a medida con:",
        features: [
          "Diseño limpio y minimalista adaptable a móviles",
          "Editor sencillo (como Word) para publicar sin complicaciones",
          "Organización por categorías y etiquetas intuitivas",
          "Integración básica con redes sociales",
          "Optimización para motores de búsqueda (SEO)",
        ],
        offer:
          "Creo blogs rápidos y funcionales para quienes necesitan empezar con un sitio profesional, sin costos ocultos ni mantenimiento complejo.",
      },
      {
        id: 2,
        title: "Tienda Online",
        description:
          "Vende productos o servicios con una plataforma autogestionable",
        images: [imgdescription2, imgdescription22],
        details: "Solución completa para comercio electrónico:",
        features: [
          "Catálogo de productos con filtros y búsqueda inteligente",
          "Carrito de compras que guarda los items incluso al cerrar la sesión",
          "Pagos en línea seguros (Stripe, PayPal, Mercado Pago)",
          "Panel de control para añadir productos, ver pedidos y gestionar clientes",
          "Sistema de promociones y descuentos personalizables",
        ],
        offer:
          "Desarrollo tiendas online listas para vender, con capacitación incluida para que administres todo tú mismo.",
      },
      {
        id: 3,
        title: "Innovador financiero",
        description:
          "Monitoriza precios, tendencias y tus inversiones en el mercado crypto",
        images: [imgdescription3, imgdescription33],
        details: "Aplicación web con datos en tiempo real:",
        features: [
          "Cotizaciones actualizadas de +1000 criptomonedas",
          "Gráficos interactivos (1h, 24h, 1 semana, etc.)",
          "Alertas personalizables por email o notificaciones",
          "Simulador de portafolio para seguir tus activos",
          "Noticias y eventos relevantes del mercado",
        ],
        offer:
          "Creo dashboards crypto a medida para inversores o entusiastas, con conexión a APIs confiables y diseño intuitivo.",
      },
    ],
    en: [
      {
        id: 1,
        title: "Personal Blog",
        description:
          "Your Digital Space to Create, Connect, and Grow Professionally",
        images: ["/assets/images/p1.png", "/assets/images/p1-1.png"],
        details: "Custom blog development with:",
        features: [
          "Clean, minimalist mobile-responsive design",
          "Simple editor (like Word) for easy publishing",
          "Intuitive organization with categories and tags",
          "Basic social media integration",
          "Search engine optimization (SEO)",
        ],
        offer:
          "I create quick, functional blogs for those who need to start with a professional site, with no hidden costs or complex maintenance.",
      },
      {
        id: 2,
        title: "Online Store",
        description:
          "Sell products or services with a self-manageable platform",
        images: ["/assets/images/p2.png", "/assets/images/p2-2.jpg"],
        details: "Complete e-commerce solution:",
        features: [
          "Product catalog with filters and smart search",
          "Shopping cart that saves items even after session ends",
          "Secure online payments (Stripe, PayPal, Mercado Pago)",
          "Dashboard to add products, view orders and manage customers",
          "Customizable promotions and discounts system",
        ],
        offer:
          "I develop ready-to-sell online stores with included training so you can manage everything yourself.",
      },
      {
        id: 3,
        title: "Financially innovative",
        description:
          "Monitor prices, trends and your investments in the crypto market",
        images: ["/assets/images/p3.png", "/assets/images/p3-1.png"],
        details: "Web application with real-time data:",
        features: [
          "Updated quotes for 1000+ cryptocurrencies",
          "Interactive charts (1h, 24h, 1 week, etc.)",
          "Customizable alerts via email or notifications",
          "Portfolio simulator to track your assets",
          "Relevant market news and events",
        ],
        offer:
          "I create custom crypto dashboards for investors or enthusiasts, with reliable API connections and intuitive design.",
      },
    ],
  };

  const designSamples = [
    [img, img1, img2, img3, img4],
    [img5, img6, img7, img8],
    [img9, img10, img11, img12],
  ];

  const texts = {
    title: language === "es" ? "Mis Proyectos" : "My Projects",
    designsTitle:
      language === "es"
        ? "Variedad de Diseños para tu "
        : "Variety of Designs for your Project",
    designsHighlight: language === "es" ? "Proyecto" : "Project",
    designsDescription:
      language === "es"
        ? "Selecciona entre múltiples estilos y diseños modernos para tu sitio web. Cada diseño es completamente personalizable para adaptarse a tu marca y necesidades."
        : "Choose from multiple modern styles and designs for your website. Each design is fully customizable to fit your brand and needs.",
    designFeatures:
      language === "es"
        ? [
            "Diseños responsivos que se adaptan a cualquier dispositivo",
            "Estilos modernos y minimalistas",
            "Efectos de animación sutiles para mejor experiencia de usuario",
            "Paletas de colores personalizables",
            "Tipografías modernas y legibles",
          ]
        : [
            "Responsive designs that adapt to any device",
            "Modern and minimalist styles",
            "Subtle animation effects for better user experience",
            "Customizable color palettes",
            "Modern and readable typography",
          ],
  };

  // Animaciones
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  // Componente de Carrusel Automático
  const AutoCarousel = ({ images, direction = "right", speed = 10 }) => {
    const extendedImages =
      direction === "right"
        ? [...images, ...images, images[0]]
        : [images[images.length - 1], ...images, ...images];

    return (
      <div className="auto-carousel-container">
        <motion.div
          className="auto-carousel-track"
          animate={{
            x:
              direction === "right"
                ? ["0%", `-${100 * (images.length / extendedImages.length)}%`]
                : [
                    `${100 * (1 / extendedImages.length)}%`,
                    `-${(100 * (images.length - 1)) / extendedImages.length}%`,
                  ],
          }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {extendedImages.map((img, index) => (
            <motion.div
              key={`${index}-${img}`}
              className="auto-carousel-slide"
              style={{
                backgroundImage: `url(${img})`,
                transform: `rotateZ(${
                  direction === "right" ? "2deg" : "-2deg"
                })`,
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="proyectos" className="projects">
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

      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {texts.title}
        </motion.h2>

        <div className="contenedor">
          <motion.div
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {projects[language].map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                style={{
                  height: expandedProject === project.id ? "auto" : "400px",
                  overflow: "hidden",
                }}
                variants={cardAnimation}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: project.id * 0.15,
                }}
              >
                <motion.div
                  className="project-images"
                  variants={imageAnimation}
                >
                  <motion.img
                    src={project.images[0]}
                    alt={`Screenshot 1 of ${project.title}`}
                    className="main-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={project.images[1]}
                    alt={`Screenshot 2 of ${project.title}`}
                    className="secondary-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  className="project-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h3
                    whileHover={{ color: "#61dafb" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="short-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        className="full-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {project.details}
                        </motion.p>
                        <motion.ul
                          className="features-list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          {project.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.4 + index * 0.05,
                              }}
                            >
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.p
                          className="offer-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          {project.offer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    onClick={() => toggleDetails(project.id)}
                    whileHover={{
                      backgroundColor: "#244fdb",
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {expandedProject === project.id
                      ? language === "es"
                        ? "Ver menos"
                        : "Show less"
                      : language === "es"
                      ? "Ver detalles"
                      : "View details"}
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Nueva sección de diseños con carruseles automáticos */}
      <motion.div
        className="designs-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="designs-container">
          <div className="designs-description">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="designs-title"
            >
              {texts.designsTitle} <br />{" "}
              <span className="text-blue">{texts.designsHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {texts.designsDescription}
            </motion.p>
            <motion.ul
              className="design-features"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {texts.designFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contenedor de carruseles con nuevo diseño */}
          <div className="auto-carousels-wrapper">
            <div className="auto-carousels-frame">
              {/* Carrusel superior - derecha */}
              <div className="auto-carousel-wrapper top-carousel">
                <AutoCarousel
                  images={designSamples[0]}
                  direction="right"
                  speed={15}
                />
              </div>

              {/* Carrusel central - izquierda */}
              <div className="auto-carousel-wrapper middle-carousel">
                <AutoCarousel
                  images={designSamples[1]}
                  direction="left"
                  speed={20}
                />
              </div>

              {/* Carrusel inferior - derecha */}
              <div className="auto-carousel-wrapper bottom-carousel">
                <AutoCarousel
                  images={designSamples[2]}
                  direction="right"
                  speed={18}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
