import React from 'react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative h-[75vh] w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://unsplash.com')" 
      }}
    >
      {/* Filtro oscuro superpuesto para que el texto resalte (Overlay) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Contenido principal sobre la imagen */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl flex flex-col items-center gap-4 animate-fade-in">
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
          RESERVA TU CANCHA <br />
          <span className="text-green-400">FÁCILMENTE</span>
        </h1>
        
        <p className="text-sm md:text-lg text-gray-300 max-w-xl font-medium mt-2">
          Alquila las mejores canchas de fútbol 5, 7 y 11 de la ciudad en menos de un minuto. Elige tu horario, reúne a tu equipo y salta a la cancha.
        </p>

        {/* Botón de Llamado a la Acción */}
        <a 
          href="#canchas" 
          className="mt-6 bg-green-500 hover:bg-green-600 text-[#0b132b] font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-200 text-sm md:text-base tracking-wide"
        >
          VER DISPONIBILIDAD
        </a>

      </div>

      {/* Detalle visual sutil de fondo inferior */}
      <div 
  className="absolute bottom-0 left-0 right-0 h-24 z-20"
  style={{ backgroundImage: 'linear-gradient(to top, #0f172a, transparent)' }}
></div>
    </section>
  );
}
