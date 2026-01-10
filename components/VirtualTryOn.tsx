
import React, { useState, useRef } from 'react';

const VirtualTryOn: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
      }
    } catch (err) {
      console.error("Error al acceder a la cámara:", err);
      alert("Por favor permite el acceso a la cámara para usar el Probador Virtual.");
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Pruébatelas sin salir de casa</h2>
            <p className="text-slate-600">Nuestra tecnología de Realidad Aumentada te ayuda a encontrar las gafas perfectas para tu tipo de rostro.</p>
          </div>

          <div className="relative aspect-video bg-slate-100 rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl flex items-center justify-center">
            {!isActive ? (
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Probador Virtual 2.0</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Simula cómo te quedan tus marcos favoritos usando la cámara de tu celular o computador.</p>
                <button 
                  onClick={startCamera}
                  className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-600/20"
                >
                  Activar Cámara
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
                {/* Simulated Glass Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-64 opacity-80 animate-pulse transition-all duration-300">
                      <svg viewBox="0 0 200 60" className="fill-slate-900 drop-shadow-2xl">
                        <path d="M40 10 C 60 10, 70 30, 90 30 C 110 30, 120 10, 140 10 L 180 10 C 190 10, 195 20, 195 30 L 195 40 C 195 50, 185 55, 175 55 L 140 55 C 120 55, 110 40, 100 40 C 90 40, 80 55, 60 55 L 25 55 C 15 55, 5 50, 5 40 L 5 30 C 5 20, 10 10, 20 10 Z" />
                      </svg>
                   </div>
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 overflow-x-auto p-4 w-full justify-center scrollbar-hide">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="flex-shrink-0 w-16 h-16 bg-white/80 backdrop-blur rounded-full border-2 border-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                        <span className="text-[10px] font-bold text-blue-600">MARCO {i}</span>
                     </div>
                   ))}
                </div>
                <button 
                  onClick={() => {
                    const tracks = (videoRef.current?.srcObject as MediaStream)?.getTracks();
                    tracks?.forEach(t => t.stop());
                    setIsActive(false);
                  }}
                  className="absolute top-4 right-4 bg-white/50 backdrop-blur p-2 rounded-full text-slate-900 hover:bg-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
