
import React, { useState } from 'react';
import { Icons } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 glass-effect">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-black tracking-tighter text-slate-900">
            ÓPTICAS <span className="text-blue-600">ABC</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#gafas-oftalmicas" className="hover:text-blue-600 transition-colors">Oftálmicas</a>
            <a href="#gafas-sol" className="hover:text-blue-600 transition-colors">Gafas de Sol</a>
            <a href="#lentes-contacto" className="hover:text-blue-600 transition-colors">Lentes de Contacto</a>
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Examen Visual</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 hover:text-blue-600"><Icons.Search /></button>
          <button className="p-2 text-slate-600 hover:text-blue-600"><Icons.User /></button>
          <button className="p-2 text-slate-600 hover:text-blue-600 relative">
            <Icons.Cart />
            <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#gafas-oftalmicas" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Oftálmicas</a>
          <a href="#gafas-sol" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Gafas de Sol</a>
          <a href="#lentes-contacto" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Lentes de Contacto</a>
          <a href="#servicios" className="text-lg font-semibold text-blue-600" onClick={() => setIsMenuOpen(false)}>Agendar Examen</a>
        </div>
      )}
    </header>
  );
};

export default Header;
