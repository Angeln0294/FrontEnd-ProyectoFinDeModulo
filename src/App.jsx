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

// 1. Importación corregida con "c" para que Vite encuentre tu archivo físico
import SeccionPublicidad from './components/SeccionPublicidad'; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* RUTA DE INICIO: Con el Hero, la publicidad unificada y tu catálogo compacto */}
        <Route path="/" element={
          <>
            <Hero />
            {/* 2. Inyección de la etiqueta corregida con "c" */}
            <SeccionPublicidad />
            
            {/* Contenedor estético para recortar tu catálogo a solo las primeras 3 tarjetas */}
          <div className="max-h-160 overflow-hidden bg-[#0b132b]">
            <SeccionCanchas />
          </div>
            
            <EquipamientoDestacado />
          </>
        } />
        
        {/* RUTA DE CANCHAS: Muestra las 9 tarjetas completas de forma independiente */}
        <Route path="/canchas" element={<SeccionCanchas />} />
        
        {/* Resto de tus rutas independientes */}
        <Route path="/tienda" element={<EquipamientoDestacado />} />
        <Route path="/contacto" element={<SeccionContacto />} />
        <Route path="/registro" element={<SeccionRegistro />} />
        <Route path="/login" element={<SeccionLogin />} />
      </Routes>

      <Footer />
    </Router>
  );
}
