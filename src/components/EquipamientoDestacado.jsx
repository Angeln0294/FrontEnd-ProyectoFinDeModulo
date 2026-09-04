import React from 'react';

export default function EquipamientoDestacado() {
  // Datos simulados de los productos del mockup
  const productos = [
    {
      id: 1,
      nombre: "Pelota de Fútbol",
      categoria: "Accesorios",
      precio: "$15.000",
      imagen: "https://unsplash.com"
    },
    {
      id: 2,
      nombre: "Guantes de Arquero",
      categoria: "Protección",
      precio: "$25.000",
      imagen: "https://unsplash.com"
    },
    {
      id: 3,
      nombre: "Botines Sintéticos",
      categoria: "Calzado",
      precio: "$45.000",
      imagen: "https://unsplash.com"
    }
  ];

  return (
    <section id="tienda" className="w-full bg-[#0b132b] py-16 px-6 md:px-12 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la Sección */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
          Equipamiento <span className="text-green-400">Destacado</span>
        </h2>

        {/* Grilla Adaptativa de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div 
              key={producto.id} 
              className="bg-[#1e293b] rounded-2xl p-6 border border-gray-800 flex flex-col justify-between items-center text-center shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              
              {/* Contenedor e Imagen del Producto */}
              <div className="w-full h-44 flex items-center justify-center overflow-hidden bg-gray-900/40 rounded-xl mb-4 p-4">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Información del Producto */}
              <div className="w-full mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">
                  {producto.categoria}
                </span>
                <h3 className="text-lg font-bold text-white mt-3 mb-1">
                  {producto.nombre}
                </h3>
                <p className="text-xl font-black text-gray-200">
                  {producto.precio}
                </p>
              </div>

              {/* Botón Agregar al Carrito */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-[#0b132b] font-black py-2.5 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-green-500/10">
                AGREGAR AL CARRITO
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
