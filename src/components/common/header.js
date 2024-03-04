import React, { useState, useEffect } from 'react';
import styles from '../styles/main.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si el usuario ha hecho scroll manualmente
      if (window.pageYOffset !== 0 && menuOpen === false) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]); // Agregamos menuOpen a la lista de dependencias

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setVisible(false);
    }
  };

  return (
    <header className={`${styles.header} ${visible ? styles.show : styles.hide}`}>
      <nav className={styles.menu}>
        <div className={styles.menuItems}>
          <a onClick={() => scrollToSection('init')}>Inicio</a>
          <a onClick={() => scrollToSection('skills')}>Habilidades</a>
          <a onClick={() => scrollToSection('experience')}>Experiencia</a>
          <a onClick={() => scrollToSection('education')}>Educación</a>
        </div>
        <div>
          <button onClick={toggleMenu} className={styles.menuButton}>
            <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </nav>

      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuContent}>
          <a onClick={() => { scrollToSection('init'); }}>Inicio</a>
          <a onClick={() => { scrollToSection('skills'); }}>Habilidades</a>
          <a onClick={() => { scrollToSection('experience'); }}>Experiencia</a>
          <a onClick={() => { scrollToSection('education'); }}>Educación</a>
          <a onClick={toggleMenu}>Cerrar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
