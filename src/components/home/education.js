// src/components/home/Education.js

import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <section id="education">
      <h2>Educación</h2>
      {/* Detalles sobre tu educación */}
      <Link to="/education/details  ">Ver Más Detalles</Link>
    </section>
  );
};

export default Education;
