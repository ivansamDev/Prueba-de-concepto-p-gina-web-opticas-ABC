
import React, { useState, useRef, useEffect } from 'react';
import { FaceShape } from '../types';

const VirtualTryOn: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'camera' | 'analyzing' | 'result'>('idle');
  const [detectedShape, setDetectedShape] = useState<FaceShape | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStep('camera');
      }
    } catch (err) {
      alert("Necesitamos acceso a la cámara para el probador virtual.");
    }
  };

  const analyzeFace = () => {
    setStep('analyzing');
    // Simulate complex biometric analysis
    setTimeout(() => {
      const shapes = [FaceShape.ROUND, FaceShape.OVAL, FaceShape.SQUARE, FaceShape.HEART];
      setDetectedShape(shapes[Math.floor(Math.random() * shapes.length)]);
      setStep('result');
    }, 2500);
  };

  const stopCamera = () => {
    const tracks = (videoRef.current?.srcObject as MediaStream)?.getTracks();
    tracks?.forEach(t => t.stop());
    setStep('idle');
    setDetectedShape(null);
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="probador-virtual">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Tecnología de Vanguardia</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Probador Virtual AI</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nuestra inteligencia artificial analiza tus rasgos faciales para recomendarte los marcos que mejor resaltan tu belleza natural.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Viewer */}
            <div className="lg:col-span-8 relative aspect-video md:aspect-square lg:aspect-video bg-black rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl group">
              {step === 'idle' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1511499767350-a1590fdb2ca8?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl shadow-blue-600/40">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black mb-4">Listo para tu transformación?</h3>
                    <button 
                      onClick={startCamera}
                      className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
                    >
                      Activar Escáner Facial
                    </button>
                  </div>
                </div>
              )}

              {(step === 'camera' || step === 'analyzing' || step === 'result') && (
                <div className="relative w-full h-full">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                  
                  {/* Scanning Overlays */}
                  {step === 'camera' && (
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-white/20 m-12 rounded-full pointer-events-none">
                      <div className="text-center bg-black/40 backdrop-blur-md p-4 rounded-xl">
                        <p className="text-sm font-bold">Ubica tu rostro en el centro</p>
                        <button 
                          onClick={analyzeFace}
                          className="mt-4 bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-500 pointer-events-auto"
                        >
                          Analizar Forma de Rostro
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 'analyzing' && (
                    <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm flex flex-col items-center justify-center">
                      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-white animate-[loading_2s_ease-in-out_infinite] w-full origin-left"></div>
                      </div>
                      <p className="text-lg font-black tracking-widest uppercase animate-pulse">Analizando Puntos Biométricos...</p>
                      <style>{`
                        @keyframes loading {
                          0% { transform: scaleX(0); }
                          50% { transform: scaleX(1); }
                          100% { transform: scaleX(0); transform-origin: right; }
                        }
                      `}</style>
                    </div>
                  )}

                  {step === 'result' && (
                    <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
                       {/* Floating Frame Recommendation */}
                       <div className="w-full flex justify-center mb-12">
                          <img 
                            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=300&auto=format&fit=crop" 
                            className="w-48 drop-shadow-[0_20px_50px_rgba(37,99,235,0.5)] animate-bounce" 
                            alt="Frame Overlay"
                          />
                       </div>
                       
                       <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-white/10 pointer-events-auto flex items-center justify-between">
                          <div>
                             <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">Rostro Detectado</p>
                             <h4 className="text-2xl font-black">{detectedShape || 'Ovalado'}</h4>
                             <p className="text-slate-400 text-sm">Te recomendamos: Marcos rectangulares y estilo Wayfarer.</p>
                          </div>
                          <button className="bg-blue-600 p-4 rounded-2xl hover:bg-blue-500 transition-colors">
                            <Icons.Cart />
                          </button>
                       </div>
                    </div>
                  )}

                  <button 
                    onClick={stopCamera}
                    className="absolute top-6 right-6 bg-white/10 hover:bg-red-500/80 backdrop-blur p-3 rounded-2xl transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Recommendations */}
            <div className="lg:col-span-4 flex flex-col gap-4">
               <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Recomendaciones AI
                  </h4>
                  <div className="space-y-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10 group">
                        <div className="w-20 h-20 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={`https://picsum.photos/seed/${i + 50}/100/100`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-[10px] font-black text-blue-400 uppercase">Marco {i === 1 ? 'Ideal' : 'Alternativo'}</p>
                          <h5 className="font-bold text-sm">Ray-Ban Clubmaster</h5>
                          <p className="text-xs text-slate-500">$540.000 COP</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="bg-blue-600 p-8 rounded-[2rem] text-center flex-grow flex flex-col justify-center">
                  <h4 className="text-xl font-black mb-2">¿Dudas con tu talla?</h4>
                  <p className="text-sm text-blue-100 mb-6">Nuestros expertos te asesoran en vivo según tu fisionomía.</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all">
                    Hablar con un Experto
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Icons = {
  Cart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

export default VirtualTryOn;
