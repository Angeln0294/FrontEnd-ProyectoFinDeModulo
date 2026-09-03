import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado'; 
import SeccionContacto from './components/SeccionContacto';
import SeccionRegistro from './components/SeccionRegistro';
import SeccionLogin from './components/SeccionLogin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SeccionPublicidad from './components/SeccionPublicidad'; 

// 1. CORREGIDO: Activamos el import quitando las barras de comentario
import TiendaCompleta from './components/TiendaCompleta'; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* RUTA DE INICIO SEGURA */}
        <Route path="/" element={
          <>
            <Hero />
            <SeccionPublicidad />
            
            {/* Contenedor para tus 3 canchas originales */}
            <div className="max-h-160 overflow-hidden bg-[#0b132b]">
              <SeccionCanchas />
            </div>
            
            {/* Muestra tus 3 productos destacados originales de la Home */}
            <EquipamientoDestacado />
          </>
        } />
        
        {/* RUTAS INDEPENDIENTES LIMPIAS */}
        <Route path="/canchas" element={<SeccionCanchas />} />
        
        {/* 2. CORREGIDO: Cambiamos EquipamientoDestacado por tu nuevo componente de 9 cards */}
        <Route path="/tienda" element={<TiendaCompleta />} /> 
        
        {/* Resto de tus formularios */}
        <Route path="/contacto" element={<SeccionContacto />} />
        <Route path="/registro" element={<SeccionRegistro />} />
        <Route path="/login" element={<SeccionLogin />} />
      </Routes>

      <Footer />
    </Router>
  );
}
