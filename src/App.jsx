import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado';
import SeccionContacto from './components/SeccionContacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// PÁGINA DE INICIO COMPLETA: Muestra el recorrido en cascada
function PaginaInicio() {
  return (
    <main className="w-full">
      <Hero />
      {/* ⚠️ ESTA LÍNEA DE ABAJO ES CLAVE: Activa el filtro para que SOLO muestre 3 en el inicio */}
      <SeccionCanchas limitarA3={true} />
      <EquipamientoDestacado />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Resetea el scroll automático hacia arriba al cambiar de pestaña */}
      
      <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
        <Navbar />
        
        <Routes>
          {/* La raíz muestra el Inicio completo con solo 3 canchas */}
          <Route path="/" element={<PaginaInicio />} />
          
          {/* Estas rutas limpian la pantalla y muestran el componente entero (con las 9 canchas) */}
          <Route path="/canchas" element={<SeccionCanchas />} />
          <Route path="/tienda" element={<EquipamientoDestacado />} />
          <Route path="/contacto" element={<SeccionContacto />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
