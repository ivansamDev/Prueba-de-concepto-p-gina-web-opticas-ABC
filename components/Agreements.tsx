
import React from 'react';

const Agreements: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Alianzas y Beneficios</h4>
            <p className="text-slate-600 font-medium">Usa tus convenios y paga a crédito sin complicaciones.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="font-black text-2xl text-slate-400">PSE</span>
             <span className="font-black text-2xl text-slate-400">Addi</span>
             <span className="font-black text-2xl text-slate-400">COMPENSAR</span>
             <span className="font-black text-2xl text-slate-400">COLSUBSIDIO</span>
             <span className="font-black text-2xl text-slate-400">VISA/MC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agreements;
