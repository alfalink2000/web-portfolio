import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiTranslate2 } from "react-icons/ri";

export const LanguageSwitcher = ({ language, setLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="language-switcher-wrapper">
      <motion.button
        className="language-trigger"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiTranslate2 size={20} />
        <span>{language === "es" ? "ES" : "EN"}</span>
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => {
                setLanguage("es");
                setIsDropdownOpen(false);
              }}
              className={language === "es" ? "active" : ""}
            >
              Español
            </button>
            <button
              onClick={() => {
                setLanguage("en");
                setIsDropdownOpen(false);
              }}
              className={language === "en" ? "active" : ""}
            >
              English
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
