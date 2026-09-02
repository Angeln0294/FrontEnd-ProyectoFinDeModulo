import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado';
import SeccionContacto from './components/SeccionContacto';
import Footer from './components/Footer';

// Componente intermedio que agrupa la estructura de la página principal
function PaginaInicio() {
  return (
    <main className="w-full">
      <Hero />
      <SeccionCanchas />
      <EquipamientoDestacado />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
        {/* El Navbar se mantiene fijo arriba en todas las pantallas */}
        <Navbar />
        
        {/* Aquí el sistema decide qué componente renderizar según la URL */}
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/contacto" element={<SeccionContacto />} />
        </Routes>
        
        {/* El Footer se mantiene fijo abajo en todas las pantallas */}
        <Footer />
      </div>
    </Router>
  );
}
