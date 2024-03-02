// src/components/home/Experience.js

import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia Laboral</h2>
      {/* Detalles sobre tu experiencia laboral */}
      <Link to="/experience">Ver Más Detalles</Link>
    </section>
  );
};

export default Experience;
