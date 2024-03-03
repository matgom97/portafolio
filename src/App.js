// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './pages/HomeContainer';
import './components/styles/main.module.scss';

const App = () => {
  return (
    <Router>
      <div>
        {/* Otras partes de tu aplicación, como la barra de navegación, podrían ir aquí */}
        <Routes>
          <Route path="/" element={<HomeContainer />} />
         
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

