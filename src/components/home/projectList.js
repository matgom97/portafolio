// src/components/home/ProjectList.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <section>
      <h2>Proyectos Destacados</h2>
      {/* Aquí puedes listar tus proyectos */}
      <Link to="/projects">Ver Todos los Proyectos</Link>
    </section>
  );
};

export default ProjectList;
