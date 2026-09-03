import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado'; // <--- Tus 3 tarjetas para la Home
import TiendaCompleta from './components/TiendaCompleta';               // <--- Tus 9 tarjetas para la Tienda
import SeccionContacto from './components/SeccionContacto';
import SeccionRegistro from './components/SeccionRegistro';
import SeccionLogin from './components/SeccionLogin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SeccionPublicidad from './components/SeccionPublicidad'; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* RUTA DE INICIO: Todo fluye hacia abajo de forma natural sin pisarse */}
        <Route path="/" element={
          <>
            <Hero />
            <SeccionPublicidad />
            
            {/* Contenedor nativo para tus 3 canchas originales */}
            <div className="max-h-160 overflow-hidden bg-[#0b132b]">
              <SeccionCanchas />
            </div>
            
            {/* Bloque original de la Home con tus 3 productos destacados */}
            <EquipamientoDestacado />
          </>
        } />
        
        {/* RUTAS INDEPENDIENTES LIMPIAS */}
        <Route path="/canchas" element={<SeccionCanchas />} />
        <Route path="/tienda" element={<TiendaCompleta />} /> {/* <--- Apunta al catálogo de 9 */}
        
        {/* Resto de tus formularios */}
        <Route path="/contacto" element={<SeccionContacto />} />
        <Route path="/registro" element={<SeccionRegistro />} />
        <Route path="/login" element={<SeccionLogin />} />
      </Routes>

      <Footer />
    </Router>
  );
}
