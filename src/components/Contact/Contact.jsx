import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../styles/Contact/Contact.css";

const MySwal = withReactContent(Swal);

export const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = {
    title: language === "es" ? "Contáctame" : "Contact Me",
    subtitle:
      language === "es"
        ? "¿Tienes un proyecto en mente? Hablemos."
        : "Have a project in mind? Let's talk.",
    formLabels: {
      name: language === "es" ? "Nombre" : "Name",
      email: "Email",
      message: language === "es" ? "Mensaje" : "Message",
    },
    placeholders: {
      name: language === "es" ? "Tu nombre completo" : "Your full name",
      email: language === "es" ? "tu@email.com" : "your@email.com",
      message:
        language === "es"
          ? "Cuéntame sobre tu proyecto..."
          : "Tell me about your project...",
    },
    errorMessages: {
      name: language === "es" ? "Nombre es requerido" : "Name is required",
      email: language === "es" ? "Email es requerido" : "Email is required",
      invalidEmail: language === "es" ? "Email no válido" : "Invalid email",
      message:
        language === "es" ? "Mensaje es requerido" : "Message is required",
    },
    submitButton: language === "es" ? "Enviar Mensaje" : "Send Message",
    submitting: language === "es" ? "Enviando..." : "Sending...",
    success: {
      title:
        language === "es"
          ? "¡Mensaje enviado con éxito!"
          : "Message sent successfully!",
      text:
        language === "es"
          ? "Me pondré en contacto contigo pronto."
          : "I'll get back to you soon.",
      button: language === "es" ? "Entendido" : "Got it",
    },
    error: {
      title: "Error",
      text:
        language === "es"
          ? "Ocurrió un error al enviar el mensaje"
          : "An error occurred while sending the message",
    },
    contactInfo: {
      location: language === "es" ? "Ubicación" : "Location",
      phone: language === "es" ? "Teléfono" : "Phone",
      address: "Cuba, Pinar del Rio",
      email: "alfalink2000@gmail.com",
      phoneNumber: "+53 5288 0034",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name.trim())
      newErrors.from_name = texts.errorMessages.name;
    if (!formData.from_email.trim()) {
      newErrors.from_email = texts.errorMessages.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = texts.errorMessages.invalidEmail;
    }
    if (!formData.message.trim())
      newErrors.message = texts.errorMessages.message;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showSuccessAlert = () => {
    MySwal.fire({
      title: <strong>{texts.success.title}</strong>,
      html: <p>{texts.success.text}</p>,
      icon: "success",
      background: "#ffffff",
      color: "#333333",
      showConfirmButton: true,
      confirmButtonColor: "#4f46e5",
      confirmButtonText: texts.success.button,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const serviceID = "service_8o3gsx1";
      const templateID = "template_ubo2xim";
      const userID = "W66pdX8ZR2wekMIgC";

      // Usamos el formulario actual en lugar de crear uno temporal
      await emailjs.sendForm(serviceID, templateID, e.target, userID);

      showSuccessAlert();
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      MySwal.fire({
        title: texts.error.title,
        text: error.text || texts.error.text,
        icon: "error",
        confirmButtonColor: "#4f46e5",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="section-title">{texts.title}</h2>
          <p className="section-subtitle">{texts.subtitle}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>{texts.contactInfo.location}</h4>
                <p>{texts.contactInfo.address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>{texts.formLabels.email}</h4>
                <p>{texts.contactInfo.email}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>{texts.contactInfo.phone}</h4>
                <p>{texts.contactInfo.phoneNumber}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="from_name">{texts.formLabels.name}</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className={errors.from_name ? "error" : ""}
                placeholder={texts.placeholders.name}
              />
              {errors.from_name && (
                <span className="error-message">{errors.from_name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="from_email">{texts.formLabels.email}</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className={errors.from_email ? "error" : ""}
                placeholder={texts.placeholders.email}
              />
              {errors.from_email && (
                <span className="error-message">{errors.from_email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">{texts.formLabels.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                rows="6"
                placeholder={texts.placeholders.message}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                texts.submitting
              ) : (
                <>
                  <FaPaperPlane className="btn-icon" /> {texts.submitButton}
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
