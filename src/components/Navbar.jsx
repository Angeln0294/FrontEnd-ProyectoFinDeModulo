import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b132b] text-white px-6 py-4 md:px-12 flex flex-wrap items-center justify-between sticky top-0 z-50 shadow-md">
      
      {/* Brand / Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-sm text-white">
          ⚽
        </div>
        <span className="text-xl font-bold tracking-wide">
          Canchas<span className="text-green-400">Ya</span>
        </span>
      </div>

      {/* Menú de Hamburguesa (Celulares) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Links de Navegación */}
      <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0 transition-all duration-300`}>
        <ul className="flex flex-col md:flex-row gap-6 text-sm font-medium text-gray-300 md:items-center">
          <li><a href="#inicio" className="hover:text-green-400 transition-colors">Inicio</a></li>
          <li><a href="#canchas" className="hover:text-green-400 transition-colors">Nuestras Canchas</a></li>
          <li><a href="#tienda" className="hover:text-green-400 transition-colors">Tienda</a></li>
          <li><a href="#contacto" className="hover:text-green-400 transition-colors">Contacto</a></li>
        </ul>
      </div>

      {/* Login y Cuenta */}
      <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
        <div className="flex items-center gap-4 text-sm justify-between md:justify-end">
          <a href="#login" className="hover:text-green-400 transition-colors">
            Iniciar Sesión
          </a>
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full border border-gray-700 cursor-pointer hover:bg-gray-700 transition-all">
            <span className="text-xs text-gray-400">Mi Cuenta</span>
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs">
              👤
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}
