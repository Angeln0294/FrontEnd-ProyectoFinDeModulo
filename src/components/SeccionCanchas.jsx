import React from 'react';
import { Link } from 'react-router-dom';

export default function SeccionCanchas({ limitarA3 = false }) {
  
  const todasLasCanchas = [
    {
      id: 1,
      titulo: "Fútbol 5 — Sintético Estándar",
      descripcion: "Césped sintético premium de alta densidad, ideal para el clásico partido rápido entre amigos.",
      precio: "$15.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 2,
      titulo: "Fútbol 7 — Domo Techado",
      descripcion: "Domo cubierto con iluminación profesional. Tu partido no se suspende jamás por lluvia.",
      precio: "$20.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 3,
      titulo: "Fútbol 11 — Estadio Principal",
      descripcion: "Césped natural con medidas reglamentarias oficiales e iluminación LED para torneos.",
      precio: "$35.000 / Hora",
      imagen: "https://unsplash.com"
    },
    // --- ESTAS 6 CARDS ADICIONALES SOLO SE VERÁN EN LA PÁGINA INDEPENDIENTE ---
    {
      id: 4,
      titulo: "Fútbol 5 — Techado Premium",
      descripcion: "Cancha cubierta aislada térmicamente, equipada con césped monofilamento y vestuarios privados.",
      precio: "$18.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 5,
      titulo: "Fútbol 7 — Césped Natural",
      descripcion: "Para los amantes del juego clásico. Césped natural perfectamente nivelado, recortado y mantenido.",
      precio: "$22.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 6,
      titulo: "Fútbol 5 — Microestadio Madera",
      descripcion: "Superficie de parquet pulido de alta velocidad, ideal para fútbol sala (Futsal) táctico.",
      precio: "$14.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 7,
      titulo: "Fútbol 9 — Sintético Mixto",
      descripcion: "Una medida intermedia perfecta para equipos grandes que buscan espacio sin el desgaste de cancha de 11.",
      precio: "$28.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 8,
      titulo: "Fútbol 5 — Cancha Auxiliar",
      descripcion: "Césped sintético tradicional al aire libre. Opción económica y accesible para entrenamientos semanales.",
      precio: "$12.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 9,
      titulo: "Fútbol 11 — Alfombra Sintética",
      descripcion: "Cancha de medidas reglamentarias con césped sintético de última generación y amortiguación de caucho.",
      precio: "$32.000 / Hora",
      imagen: "https://unsplash.com"
    }
  ];

  // Corta el arreglo en 3 elementos si limitarA3 es verdadero
  const canchasAEnseñar = limitarA3 ? todasLasCanchas.slice(0, 3) : todasLasCanchas;

  return (
    <section className="w-full bg-[#0f172a] py-20 px-6 md:px-12 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
          Nuestras <span className="text-green-400">Canchas</span>
        </h2>

        {/* Grilla que organiza las 9 tarjetas de forma armónica */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {canchasAEnseñar.map((cancha) => (
            <div 
              key={cancha.id} 
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl border border-gray-800 flex flex-col justify-between p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden rounded-xl mb-4 bg-gray-900/50">
                <img 
                  src={cancha.imagen} 
                  alt={cancha.titulo} 
                  className="w-full h-full object-cover"
                  loading="lazy" // Optimiza la carga de las 9 imágenes
                />
              </div>
              
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{cancha.titulo}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{cancha.descripcion}</p>
                  <p className="text-green-400 font-bold text-sm mb-4">💵 {cancha.precio}</p>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-[#0b132b] font-black py-2.5 rounded-xl text-sm transition-colors tracking-wide shadow-md shadow-green-500/10">
                  RESERVAR TURNO
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
