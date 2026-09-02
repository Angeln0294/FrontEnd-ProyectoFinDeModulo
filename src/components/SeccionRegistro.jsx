import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SeccionRegistro() { // <-- Nombre de componente corregido
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

  return (
    <section className="w-full bg-[#0f172a] py-16 px-6 flex items-center justify-center min-h-[80vh]">
      <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-800 shadow-2xl w-full max-w-md">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Crea tu <span className="text-green-400">Cuenta</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">
            Regístrate para empezar a reservar tus turnos al instante.
          </p>
        </div>

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

          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-[#0b132b] font-black py-3 rounded-xl transition-colors text-sm tracking-wide mt-4 shadow-md shadow-green-500/10">
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
