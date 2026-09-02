import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
      {/* 1. Navbar arriba */}
      <Navbar />
      
      {/* 2. El Banner de Inicio al medio ocupando su espacio */}
      <main className="w-full">
        <Hero />
      </main>
      
      {/* 3. El Footer abajo de todo */}
      <Footer />
    </div>
  );
}
