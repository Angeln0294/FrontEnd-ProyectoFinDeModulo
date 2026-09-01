import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // Este contenedor principal ocupa toda la pantalla y organiza los bloques hacia abajo
    <div className="min-h-screen bg-[#0b132b] flex flex-col justify-between">
      
      {/* 1. PARTE SUPERIOR: Barra de navegación */}
      <Navbar />
      
      {/* 2. PARTE CENTRAL: El contenido principal de tu página */}
      <main className="flex flex-col items-center justify-center text-white py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight">
          RESERVA TU CANCHA <span className="text-green-400 block md:inline">FÁCILMENTE</span>
        </h1>
        <p className="mt-4 text-gray-400 text-sm max-w-sm text-center">
          Pronto añadiremos aquí la sección de canchas y la tienda de equipamiento.
        </p>
      </main>
      
      {/* 3. PARTE INFERIOR: Pie de página */}
      <Footer />

    </div>
  );
}

export default App;
