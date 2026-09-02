import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado';
import SeccionContacto from './components/SeccionContacto';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
        <Navbar/>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/canchas" element={<SeccionCanchas />} />
          <Route path="/tienda" element={<EquipamientoDestacado />} />
          <Route path="/contacto" element={<SeccionContacto />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}
