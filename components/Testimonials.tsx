
import React from 'react';
import { Testimonial } from '../types';

const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Laura Restrepo', comment: 'Las gafas llegaron en 2 días a Medellín. La calidad del marco y la precisión de la fórmula son increíbles. ¡Súper recomendados!', rating: 5, date: 'Hace 2 días' },
  { id: '2', name: 'Carlos Mario G.', comment: 'Me encantó el probador virtual, me ayudó a decidirme por unos marcos que no hubiera elegido en tienda física. La atención por WhatsApp es 10/10.', rating: 5, date: 'Hace 1 semana' },
  { id: '3', name: 'Ana María V.', comment: 'Compré con el descuento del 15% y usé Addi. Proceso súper rápido y las gafas son hermosas.', rating: 5, date: 'Hace 3 días' }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Lo que dicen nuestros clientes</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-500 font-bold">4.9/5 basado en 5,230 reseñas en Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all">
              <p className="text-slate-600 mb-6 italic">"{t.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/${t.id}/40/40`} className="w-10 h-10 rounded-full" alt={t.name} />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black">{t.date} • Verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
