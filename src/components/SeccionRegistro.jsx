import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SeccionRegistro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("⚠️ Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }
    alert(`⚽ ¡Cuenta creada con éxito para ${formData.nombre}! Bienvenido a CanchasYa.`);
    setFormData({ nombre: '', email: '', password: '', confirmPassword: '' });
  };

  // Funciones para manejar los registros sociales más adelante
  const handleSocialRegister = (provider) => {
    alert(`🌐 Redireccionando al registro seguro con ${provider}...`);
  };

  return (
    <section className="w-full bg-[#0f172a] py-16 px-6 flex items-center justify-center min-h-[85vh]">
      <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 shadow-2xl w-full max-w-md">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Crea tu <span className="text-green-400">Cuenta</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">
            Regístrate para empezar a reservar tus turnos al instante.
          </p>
        </div>

        {/* BOTONES SOCIALES */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Botón Google */}
          <button 
            type="button"
            onClick={() => handleSocialRegister('Google')}
            className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
          >
            <span className="text-sm">🌐</span> Google
          </button>
          
          {/* Botón Facebook */}
          <button 
            type="button"
            onClick={() => handleSocialRegister('Facebook')}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
          >
            <span className="text-sm">📘</span> Facebook
          </button>
        </div>

       {/* Divisor estético corregido sin advertencias */}
    <div className="flex py-2 items-center mb-4 w-full">
    <div className="border-t border-gray-800" style={{ flex: '1 1 0%' }}></div>
    <span className="mx-4 text-gray-500 text-[10px] font-bold uppercase tracking-wider block whitespace-nowrap">
    o regístrate con correo
    </span>
    <div className="border-t border-gray-800" style={{ flex: '1 1 0%' }}></div>
    </div>


        {/* Formulario Tradicional */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nombre Completo</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Juan Pérez" className="w-full bg-[#0b132b] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="juan@email.com" className="w-full bg-[#0b132b] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contraseña</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="w-full bg-[#0b132b] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Confirmar Contraseña</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" className="w-full bg-[#0b132b] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" />
          </div>

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-[#0b132b] font-black py-3 rounded-xl transition-colors text-sm tracking-wide mt-2 shadow-md shadow-green-500/10">
            REGISTRARME
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <a href="#login" className="text-green-400 hover:text-green-300 transition-colors no-underline font-semibold">
            Inicia Sesión
          </a>
        </div>

      </div>
    </section>
  );
}
