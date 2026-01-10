
import React from 'react';
import { Icons } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/573000000000?text=Hola!%20Busco%20asesoría%20para%20mis%20nuevas%20gafas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      aria-label="Chatear con un asesor"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
        Asesoría Rockstar
      </span>
      <Icons.WhatsApp />
    </a>
  );
};

export default WhatsAppButton;
