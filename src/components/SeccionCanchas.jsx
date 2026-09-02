import React from 'react';

export default function SeccionCanchas() {
  // Listado de canchas simulando datos de una base de datos o API
  const canchas = [
    {
      id: 1,
      titulo: "Fútbol 5 - Sintético",
      descripcion: "Césped sintético de alta densidad, ideal para partidos rápidos con amigos.",
      capacidad: "10 Jugadores",
      precio: "$15.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 2,
      titulo: "Fútbol 7 - Techado",
      descripcion: "Domo cubierto con iluminación profesional. Tu partido no se suspende por lluvia.",
      capacidad: "14 Jugadores",
      precio: "$20.000 / Hora",
      imagen: "https://unsplash.com"
    },
    {
      id: 3,
      titulo: "Fútbol 11 - Profesional",
      descripcion: "Césped natural con medidas reglamentarias para torneos y partidos oficiales.",
      capacidad: "22 Jugadores",
      precio: "$30.000 / Hora",
      imagen: "https://unsplash.com"
    }
  ];

  return (
    <section id="canchas" className="w-full bg-[#0f172a] py-16 px-6 md:px-12 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la Sección */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
          Nuestras <span className="text-green-400">Canchas</span>
        </h2>

        {/* Grilla: 1 columna en móvil, 2 en tablets y 3 en monitores de PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {canchas.map((cancha) => (
            <div 
              key={cancha.id} 
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl border border-gray-800 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Imagen superior */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={cancha.imagen} 
                  alt={cancha.titulo} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido e información */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{cancha.titulo}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{cancha.descripcion}</p>
                  
                  {/* Detalles de precio y capacidad */}
                  <div className="flex flex-col gap-1.5 mb-6 text-xs text-gray-300 font-medium">
                    <div>👥 Capacidad: {cancha.capacidad}</div>
                    <div className="text-green-400 font-bold text-sm">💵 {cancha.precio}</div>
                  </div>
                </div>

                {/* Botón de Reserva */}
                <button className="w-full bg-green-500 hover:bg-green-600 text-[#0b132b] font-black py-2.5 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-green-500/10">
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
