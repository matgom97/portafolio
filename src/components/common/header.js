import React, { useState, useEffect } from 'react';
import styles from '../styles/main.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [cliced, setClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.pageYOffset >= 0 && cliced === false) {
        setVisible(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cliced, scrolling, visible]); // Observamos 'cliced' y 'scrolling' en el arreglo de dependencias
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setVisible(false);
      setScrolling (true)
    }
  };

  // Manejador de evento para clics en enlaces
  const handleClick = () => {
    console.log("¡Se hizo clic en un enlace!");
    setClicked(true);
    setTimeout(() => setClicked(false), 900);
  };

  return (
    <header className={`${styles.header} ${visible ? styles.show : styles.hide}`}>
      <nav className={styles.menu}>
        <div className={styles.menuItems}>
          <a onClick={() => { scrollToSection('init'); handleClick(); }}>Inicio</a>
          <a onClick={() => { scrollToSection('skills'); handleClick(); }}>Habilidades</a>
          <a onClick={() => { scrollToSection('experience'); handleClick(); }}>Experiencia</a>
          <a onClick={() => { scrollToSection('education'); handleClick(); }}>Educación</a>
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
          <a onClick={() => { handleClick(); scrollToSection('init'); }}>Inicio</a>
          <a onClick={() => { handleClick(); scrollToSection('skills'); }}>Habilidades</a>
          <a onClick={() => { handleClick(); scrollToSection('experience'); }}>Experiencia</a>
          <a onClick={() => { handleClick(); scrollToSection('education'); }}>Educación</a>
          <a onClick={toggleMenu}>Cerrar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
