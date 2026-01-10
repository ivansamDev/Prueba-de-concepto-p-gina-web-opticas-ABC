
import React from 'react';

const Agreements: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-sm">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-3">Financiación y Alianzas</h4>
            <p className="text-slate-900 font-bold text-xl leading-snug">Compra hoy, paga después con total seguridad.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
             <div className="flex flex-col items-center group cursor-help">
                <span className="font-black text-3xl text-slate-200 group-hover:text-blue-600 transition-colors">PSE</span>
                <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-600">Débito Seguro</span>
             </div>
             <div className="flex flex-col items-center group cursor-help">
                <span className="font-black text-3xl text-slate-200 group-hover:text-blue-400 transition-colors italic">ADDI</span>
                <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-slate-600">3 Cuotas 0%</span>
             </div>
             <div className="flex flex-col items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-6 object-contain" alt="Visa" />
             </div>
             <div className="flex flex-col items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 object-contain" alt="Mastercard" />
             </div>
             <div className="hidden md:flex flex-col items-center opacity-20 grayscale hover:grayscale-0 hover:opacity-80 transition-all">
                <span className="font-black text-lg text-slate-900">Compensar</span>
                <span className="text-[8px] font-black uppercase tracking-tighter">Convenio Caja</span>
             </div>
          </div>
          
          <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 hidden xl:block">
             <p className="text-xs font-bold text-slate-500">¿Tienes otro convenio? <br /><span className="text-blue-600 hover:underline cursor-pointer">Consultar beneficios</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agreements;
