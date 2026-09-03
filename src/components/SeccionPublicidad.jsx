import React from 'react';
import { Link } from 'react-router-dom';

export default function SeccionPublicidad() {
  return (
    <section className="bg-[#0b132b] px-6 py-6 md:px-12">
      {/* Contenedor del Banner con degradado oscuro de tu marca */}
      <div className="bg-linear-to-r from-green-600 via-emerald-800 to-[#0b132b] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800/50">
        
        {/* Textos de la promo */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-1">
          <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
            PROMO DE LA SEMANA ⚡
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-2 leading-none">
            ¡20% OFF EN INDUMENTARIA!
          </h3>
          <p className="text-gray-300 text-xs md:text-sm max-w-lg font-medium mt-1">
            Alquila cualquier cancha hoy y llévate un descuento exclusivo para equipar a tu equipo en nuestra tienda oficial.
          </p>
        </div>

        {/* Botón hacia tu tienda */}
        <Link 
        to="/tienda" 
        className="bg-white hover:bg-gray-100 text-[#0b132b] font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 text-xs md:text-sm tracking-wide no-underline shrink-0 inline-block uppercase">
            IR A LA TIENDA
        </Link>

      </div>
    </section>
  );
}
