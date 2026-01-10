
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-2xl font-black tracking-tighter text-white mb-6 block">
              ÓPTICAS <span className="text-blue-500">ABC</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Expertos en salud visual y tendencias en Colombia. Combinamos tecnología de punta con los mejores marcos para que veas bien y te sientas mejor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.166.054 1.8.249 2.223.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.223.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.166-.249 1.8-.413 2.223-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.223.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.166-.054-1.8-.249-2.223-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.223-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.166.249-1.8.415-2.223.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.223-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.554-.788.306-1.457.716-2.122 1.381-.665.665-1.075 1.334-1.381 2.122-.296.763-.497 1.634-.554 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.554 2.911.306.788.716 1.457 1.381 2.122.665.665 1.334 1.075 2.122 1.381.763.296 1.634.497 2.911.554 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.554.788-.306 1.457-.716 2.122-1.381.665-.665 1.075-1.334 1.381-2.122.296-.763.497-1.634.554-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.554-2.911-.306-.788-.716-1.457-1.381-2.122-.665-.665-1.334-1.075-2.122-1.381-.763-.296-1.634-.497-2.911-.554-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zM18.406 3.506a1.44 1.44 0 112.88 0 1.44 1.44 0 01-2.88 0z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Productos</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Gafas Formuladas</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Gafas de Sol</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Lentes de Contacto</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Filtro Luz Azul</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Accesorios</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Ayuda</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Agenda tu cita</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Seguimiento de pedido</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Garantía de adaptación</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Envíos y devoluciones</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-xs mb-4">Recibe 15% de descuento en tu primera compra.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Tu email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Unirse</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            © 2026 Ópticas ABC Colombia. Todos los derechos reservados. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Palabras clave: Gafas formuladas, examen visual en Bogotá, Medellín, Cali.
          </p>
          <div className="flex gap-4 opacity-50">
             <img src="https://picsum.photos/seed/pay1/30/20" alt="Payment" />
             <img src="https://picsum.photos/seed/pay2/30/20" alt="Payment" />
             <img src="https://picsum.photos/seed/pay3/30/20" alt="Payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
