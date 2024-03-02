// src/components/home/SkillList.js

import React from 'react';
import { Link } from 'react-router-dom';

const SkillList = () => {
  return (
    <section id="skills">
      <h2>Habilidades Técnicas</h2>
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        {/* Agrega más habilidades según sea necesario */}
      </ul>
      <Link to="/skills">Ver Todas las Habilidades</Link>
    </section>
  );
};

export default SkillList;
