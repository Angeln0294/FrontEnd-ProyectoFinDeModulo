import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0b132b]">
      {/* Añadimos el Navbar en la parte superior */}
      <Navbar />
      
      {/* Contenido temporal para verificar que Tailwind responde */}
      <main className="flex flex-col items-center justify-center text-white py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight">
          RESERVA TU CANCHA <span className="text-green-400 block md:inline">FÁCILMENTE</span>
        </h1>
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md text-center">
          ¡Perfecto! Si estás viendo este texto centrado y la barra superior oscura, tu configuración de Tailwind quedó al 100%.
        </p>
      </main>
    </div>
  );
}

export default App;