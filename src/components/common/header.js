import React, { useState, useEffect } from 'react';

import styles from '../styles/main.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 console.log(windowWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      //otraFuncion();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    otraFuncion()
  };

  const otraFuncion = () => {
    // Acceso al valor de menuOpen
    var x = document.querySelector(".main_menuHamburgerItem__J6rme");
    // Otra lógica basada en el valor de menuOpen
    if (menuOpen) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (windowWidth > 1236){
      x.style.display = "none";
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Cerrar el menú después de hacer clic en un enlace
    }
  };

  return (
    <header>
      <nav className={styles.menu}>
        {/* Menú de navegación */}
        <div className={styles.menuItems}>
          <a onClick={() => scrollToSection('home')}>Inicio.</a>
          <a onClick={() => scrollToSection('projects')}>Proyectos</a>
          <a onClick={() => scrollToSection('skills')}>Habilidades</a>
          <a onClick={() => scrollToSection('experience')}>Experiencia</a>
          <a onClick={() => scrollToSection('education')}>Educación</a>
        </div>
        <div>
          <button className={styles.menuButton} onClick={toggleMenu}>
            {/* Icono de hamburguesa */}
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              fill="white"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </nav>
      <div>
      
      
        <div className={` ${windowWidth > 1236 ? styles.hidden : styles.menuHamburgerItem}`}>
          <div className={` ${windowWidth > 1236 ? styles.hidden : styles.items}`}>
            <a onClick={() => scrollToSection('home')}>Inicio</a>
            <a onClick={() => scrollToSection('projects')}>Proyectos</a>
            <a onClick={() => scrollToSection('skills')}>Habilidades</a>
            <a onClick={() => scrollToSection('experience')}>Experiencia</a>
            <a onClick={() => scrollToSection('education')}>Educación</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
