import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeccionCanchas from './components/SeccionCanchas'; // <-- 1. IMPORTAMOS LAS CANCHAS
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
      {/* Barra de navegación */}
      <Navbar />
      
      {/* Contenido dinámico */}
      <main className="w-full">
        {/* Primero va el Banner de bienvenida */}
        <Hero />
        
        {/* Segundo van tus tarjetas de fútbol */}
        <SeccionCanchas />
      </main>
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}
