
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            ✨ Nueva Colección 2025
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Moda que <br /><span className="text-blue-500">cuida tus ojos.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 font-medium">
            Lo último en tendencias visuales con la precisión que tu salud requiere. 
            Envío gratis a todo Colombia y garantía de satisfacción total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1">
              Ver Catálogo
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20">
              Agendar Examen Gratis
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Usuario" />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              <span className="text-white font-bold">+50,000</span> miradas felices en Colombia
            </p>
          </div>
        </div>

        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop" 
            alt="Modelo con gafas"
            className="rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] border border-white/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl text-slate-900 hidden sm:block">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Gancho Exclusivo</p>
            <p className="text-xl font-black">15% DCTO</p>
            <p className="text-sm text-slate-500">En tu primera compra</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
