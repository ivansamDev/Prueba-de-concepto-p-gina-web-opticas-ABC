
import React from 'react';

const PrescriptionFlow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white" id="servicios">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1590141682119-e717c446706f?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-2xl" alt="Consultorio" />
                <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-2xl" alt="Optometría" />
              </div>
              <div className="pt-8 space-y-4">
                <img src="https://images.unsplash.com/photo-1581093192414-368ed48a0f4a?q=80&w=400&auto=format&fit=crop" className="rounded-2xl shadow-2xl" alt="Tecnología" />
                <div className="bg-blue-600 aspect-square rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-xl shadow-blue-600/20">
                  <span className="text-4xl font-black mb-2">100%</span>
                  <span className="text-sm font-bold uppercase tracking-widest">Precisión Garantizada</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">¿Tienes tu fórmula médica? <br />Te lo hacemos fácil.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center font-black text-blue-500 border border-white/20">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sube tu receta</h3>
                  <p className="text-slate-400">Si ya tienes tu examen, solo tómale una foto y nosotros configuramos tus lentes.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center font-black text-blue-500 border border-white/20">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">¿No tienes fórmula? Agéndate</h3>
                  <p className="text-slate-400">Realiza tu examen visual computarizado en cualquiera de nuestras sedes. <span className="text-blue-500 font-bold">¡Es gratis por la compra de tus gafas!</span></p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex-shrink-0 flex items-center justify-center font-black text-blue-500 border border-white/20">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recibe en casa</h3>
                  <p className="text-slate-400">Entrega express de 3 a 5 días hábiles en Bogotá y principales ciudades.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30">
                Agendar Examen Visual
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all">
                Subir Fórmula
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionFlow;
