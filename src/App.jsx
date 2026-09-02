import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas';
import EquipamientoDestacado from './components/EquipamientoDestacado';
import SeccionContacto from './components/SeccionContacto'; // <-- 1. IMPORTAMOS EL CONTACTO
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
      {/* Barra de navegación superior */}
      <Navbar />
      
      {/* Estructura central en cascada */}
      <main className="w-full">
        {/* 1. Inicio / Banner */}
        <Hero />
        
        {/* 2. Listado de Canchas */}
        <SeccionCanchas />
        
        {/* 3. Tienda de Equipamiento */}
        <EquipamientoDestacado />
        
        {/* 4. SECCIÓN DE CONTACTO DEBAJO DE LA TIENDA */}
        <SeccionContacto />
      </main>
      
      {/* Pie de página inferior */}
      <Footer />
    </div>
  );
}
