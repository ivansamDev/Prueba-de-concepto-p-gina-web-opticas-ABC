
import React from 'react';

const BRANDS = [
  { name: 'Ray-Ban', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ray-Ban_logo.svg', desc: 'Estilo icónico' },
  { name: 'Oakley', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Oakley_logo.svg', desc: 'Alto rendimiento' },
  { name: 'Prada', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg', desc: 'Diseño italiano' },
  { name: 'Gucci', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Gucci_Logo.svg', desc: 'Elegancia pura' },
  { name: 'Vogue', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Vogue_logo.svg', desc: 'Tendencia moderna' }
];

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Subtle background glow for premium feel */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Distribuidor Oficial Certificado
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Marcas de Prestigio Mundial
          </h2>
          <p className="text-slate-600 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Distribuidores autorizados de las firmas más icónicas del mundo. <br className="hidden md:block" />
            <span className="text-blue-600 font-bold">Autenticidad y garantía 100% respaldada por fábrica.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-12 items-center">
          {BRANDS.map((brand) => (
            <div 
              key={brand.name} 
              className="group flex flex-col items-center p-8 rounded-[2.5rem] hover:bg-slate-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-slate-100"
            >
              <div className="h-12 w-full flex items-center justify-center mb-6">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-[85%] object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100"
                />
              </div>
              <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-[10px] font-black uppercase text-blue-600 tracking-wider mb-1">{brand.name}</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{brand.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Support CTA */}
        <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-3">¿Buscas una referencia especial?</h3>
            <p className="text-slate-400 text-sm md:text-base max-w-md">
              Como distribuidores oficiales, tenemos acceso prioritario a lanzamientos y ediciones limitadas. Consúltanos por el modelo que desees.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Asesoría WhatsApp
            </button>
          </div>
          {/* Subtle gradient light flare */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
