import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
      {/* Barra de navegación superior */}
      <Navbar />
      
      {/* Contenido principal en cascada */}
      <main className="w-full">
        {/* Inicio / Banner de Bienvenida */}
        <Hero />
        
        {/* Alquiler de Canchas */}
        <SeccionCanchas />
        
        {/* 2. TIENDA DE PRODUCTOS DEBAJO DE LAS CANCHAS */}
        <EquipamientoDestacado />
      </main>
      
      {/* Pie de página inferior */}
      <Footer />
    </div>
  );
}
