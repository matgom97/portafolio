import React, { useState } from 'react';
import styles from '../styles/main.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
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
          <a onClick={() => scrollToSection('init')}>Inicio.</a>
          <a onClick={() => scrollToSection('skills')}>Habilidades</a>
          <a onClick={() => scrollToSection('experience')}>Experiencia</a>
          <a onClick={() => scrollToSection('education')}>Educación</a>
        </div>
        <div>
          <button onClick={toggleMenu}  className={styles.menuButton} >
            {/* Icono de hamburguesa */}
            <svg viewBox="0 0 100 80" width="40" height="40" fill="white">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable */}
      <div className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuContent}>
          <a onClick={() => scrollToSection('init')}>Inicio</a>
          <a onClick={() => scrollToSection('projects')}>Proyectos</a>
          <a onClick={() => scrollToSection('skills')}>Habilidades</a>
          <a onClick={() => scrollToSection('experience')}>Experiencia</a>
          <a onClick={() => scrollToSection('education')}>Educación</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
