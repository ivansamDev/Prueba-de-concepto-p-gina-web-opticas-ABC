
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { FaceShape, Product, Category } from '../types';

const VTO_FRAMES: (Product & { description: string, style: string })[] = [
  { 
    id: 'v1', 
    name: 'Oval Gold Kids', 
    brand: 'ABC Kids', 
    price: 320000, 
    category: Category.OFTALMICAS, 
    image: 'https://colgafas.freetls.fastly.net/frames/probadores/gafas-para-ninos-en-metal-ovaladas-30102403-probador-982.png?width=600', 
    recommendedFor: [FaceShape.SQUARE, FaceShape.HEART], 
    style: 'Minimalista', 
    description: 'Montura metálica ovalada con acabado en oro de 14k, ideal para rostros con facciones marcadas.' 
  },
  { 
    id: 'v2', 
    name: 'Clubmaster Black', 
    brand: 'Ray-Ban', 
    price: 540000, 
    category: Category.OFTALMICAS, 
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=300&auto=format&fit=crop', 
    recommendedFor: [FaceShape.ROUND, FaceShape.OVAL], 
    style: 'Moderno', 
    description: 'Diseño retro-fusión que aporta estructura y elegancia superior.' 
  },
  { 
    id: 'v4', 
    name: 'Holbrook Sport', 
    brand: 'Oakley', 
    price: 595000, 
    category: Category.SOL, 
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=300&auto=format&fit=crop', 
    recommendedFor: [FaceShape.ROUND, FaceShape.SQUARE], 
    style: 'Sport', 
    description: 'Resistencia extrema con lentes polarizados para un estilo de vida activo.' 
  }
];

type Step = 'setup' | 'capturing' | 'analyzing' | 'experience';
type Angle = 'frontal' | 'left' | 'right';

const VirtualTryOn: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('setup');
  const [currentAngle, setCurrentAngle] = useState<Angle>('frontal');
  const [photos, setPhotos] = useState<Record<Angle, string | null>>({ frontal: null, left: null, right: null });
  const [detectedShape, setDetectedShape] = useState<FaceShape | null>(null);
  const [selectedFrame, setSelectedFrame] = useState(VTO_FRAMES[0]);
  const [isRendering, setIsRendering] = useState(false);
  const [aiRenderedImage, setAiRenderedImage] = useState<string | null>(null);
  const [budget, setBudget] = useState<number>(800000);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (currentStep === 'capturing') startCamera();
    return () => stopCamera();
  }, [currentStep]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Error al acceder a la cámara.");
      setCurrentStep('setup');
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      ctx?.save();
      ctx?.scale(-1, 1);
      ctx?.drawImage(videoRef.current, -canvasRef.current.width, 0);
      ctx?.restore();
      
      const data = canvasRef.current.toDataURL('image/png');
      const newPhotos = { ...photos, [currentAngle]: data };
      setPhotos(newPhotos);

      if (currentAngle === 'frontal') setCurrentAngle('left');
      else if (currentAngle === 'left') setCurrentAngle('right');
      else analyzeFaceShape(newPhotos);
    }
  };

  const analyzeFaceShape = async (allPhotos: Record<Angle, string | null>) => {
    setCurrentStep('analyzing');
    stopCamera();
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const frontalData = allPhotos.frontal?.split(',')[1];
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{
          parts: [
            { text: "Determina la forma del rostro (Redondo, Ovalado, Cuadrado, Corazón). Solo responde la palabra." },
            { inlineData: { mimeType: 'image/png', data: frontalData! } }
          ]
        }]
      });
      const shape = response.text?.trim() as FaceShape;
      setDetectedShape(Object.values(FaceShape).includes(shape) ? shape : FaceShape.OVAL);
      setCurrentStep('experience');
    } catch (err) {
      setDetectedShape(FaceShape.OVAL);
      setCurrentStep('experience');
    }
  };

  const generateRealisticRender = async () => {
    setIsRendering(true);
    setAiRenderedImage(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const frontalData = photos.frontal?.split(',')[1];
      
      const prompt = `Realistic image editing: Put these exact glasses "${selectedFrame.name} - ${selectedFrame.description}" onto the person in this photo. 
      The glasses should look perfectly fit on the nose bridge, with realistic shadows and reflections on the lenses. 
      Maintain the user's facial features and identity exactly. High-end professional optical photography style.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { mimeType: 'image/png', data: frontalData! } },
            { text: prompt }
          ]
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setAiRenderedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err) {
      console.error("AI Render error:", err);
      alert("No pudimos generar el renderizado realista en este momento.");
    } finally {
      setIsRendering(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden" id="probador-virtual">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {currentStep === 'setup' && (
            <div className="text-center py-20 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
              <h2 className="text-6xl font-black mb-6 tracking-tighter">Digital <span className="text-blue-500">Twin Mirror</span></h2>
              <p className="text-slate-400 mb-12 max-w-xl mx-auto text-xl">
                Fusionamos tu rostro con nuestro catálogo mediante IA generativa para un resultado 100% real.
              </p>
              <button onClick={() => setCurrentStep('capturing')} className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">
                Iniciar Escaneo 3D
              </button>
            </div>
          )}

          {currentStep === 'capturing' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square bg-black rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover scale-x-[-1]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 border-2 border-dashed border-blue-500/30 rounded-full animate-pulse flex items-center justify-center">
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{currentAngle}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-4xl font-black tracking-tight">Captura de Biometría</h3>
                <div className="flex gap-4">
                  {(['frontal', 'left', 'right'] as Angle[]).map(a => (
                    <div key={a} className={`w-24 h-24 rounded-3xl border-2 flex items-center justify-center transition-all ${photos[a] ? 'border-green-500 bg-green-500/10' : 'border-white/10 opacity-30'}`}>
                      {photos[a] ? <img src={photos[a]!} className="w-full h-full object-cover rounded-[1.3rem]" /> : a}
                    </div>
                  ))}
                </div>
                <button onClick={capturePhoto} className="w-full bg-white text-slate-900 py-6 rounded-3xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                  Capturar Ángulo
                </button>
              </div>
            </div>
          )}

          {currentStep === 'analyzing' && (
            <div className="flex flex-col items-center justify-center py-40">
              <div className="w-24 h-24 border-8 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mb-8"></div>
              <h3 className="text-3xl font-black animate-pulse uppercase tracking-widest">Creando tu Gemelo Digital...</h3>
            </div>
          )}

          {currentStep === 'experience' && (
            <div className="grid lg:grid-cols-12 gap-10">
              {/* Main Display */}
              <div className="lg:col-span-8 bg-black rounded-[4rem] relative overflow-hidden shadow-2xl min-h-[650px] flex items-center justify-center group">
                 {aiRenderedImage ? (
                   <img src={aiRenderedImage} className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000" alt="AI Try ON" />
                 ) : (
                   <>
                     <img src={photos.frontal!} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" alt="Base" />
                     <div className="relative z-10 w-full max-w-md transition-all duration-700 group-hover:scale-110">
                        <img 
                          src={selectedFrame.image} 
                          className="w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]" 
                          style={{ mixBlendMode: 'normal' }}
                        />
                     </div>
                   </>
                 )}

                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                 
                 <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="text-left">
                       <div className="flex gap-2 mb-4">
                          <span className="bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">ROSTRO {detectedShape}</span>
                          {aiRenderedImage && <span className="bg-purple-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">Fusionado con IA</span>}
                       </div>
                       <h4 className="text-5xl font-black mb-2 tracking-tighter">{selectedFrame.name}</h4>
                       <p className="text-slate-400 text-lg mb-4 max-w-sm">"{selectedFrame.description}"</p>
                       <span className="text-3xl font-black text-blue-400">${selectedFrame.price.toLocaleString('es-CO')}</span>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                       <button 
                        onClick={generateRealisticRender}
                        disabled={isRendering}
                        className={`px-8 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-3 ${
                          aiRenderedImage ? 'bg-green-600 hover:bg-green-500' : 'bg-purple-600 hover:bg-purple-500'
                        }`}
                       >
                         {isRendering ? (
                           <>
                             <div className="w-5 h-5 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                             Renderizando...
                           </>
                         ) : aiRenderedImage ? 'Volver a Renderizar' : '✨ Fusión Realista (IA)'}
                       </button>
                       <button className="bg-white text-slate-900 px-8 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl">
                         🛒 Comprar Ahora
                       </button>
                    </div>
                 </div>
              </div>

              {/* Sidebar Controls */}
              <div className="lg:col-span-4 space-y-8 flex flex-col h-full">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[4rem] backdrop-blur-3xl shadow-2xl flex-grow overflow-hidden flex flex-col">
                  <div className="mb-10">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Presupuesto</label>
                      <span className="text-blue-400 font-black">${budget.toLocaleString('es-CO')}</span>
                    </div>
                    <input 
                      type="range" min="300000" max="1500000" step="50000" value={budget} 
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full accent-blue-600 h-2 bg-slate-800 rounded-full appearance-none cursor-pointer"
                    />
                  </div>

                  <h5 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-6">Match Automático</h5>
                  <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
                    {VTO_FRAMES.filter(f => f.price <= budget).map(frame => (
                      <button 
                        key={frame.id}
                        onClick={() => {
                          setSelectedFrame(frame);
                          setAiRenderedImage(null);
                        }}
                        className={`w-full flex items-center gap-4 p-4 rounded-[2rem] transition-all border ${
                          selectedFrame.id === frame.id ? 'bg-blue-600 border-blue-500 shadow-xl' : 'bg-white/5 border-transparent hover:bg-white/10'
                        }`}
                      >
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                          <img src={frame.image} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-black text-slate-400 uppercase">{frame.brand}</p>
                          <h6 className="font-bold text-sm leading-tight">{frame.name}</h6>
                          {frame.recommendedFor?.includes(detectedShape!) && (
                             <span className="text-[7px] font-black text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">Ideal para ti</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setCurrentStep('setup');
                    setAiRenderedImage(null);
                    setPhotos({ frontal: null, left: null, right: null });
                  }}
                  className="w-full py-4 text-slate-500 text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                  Nuevo Escaneo Biométrico
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
      <canvas ref={canvasRef} className="hidden" />
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default VirtualTryOn;
