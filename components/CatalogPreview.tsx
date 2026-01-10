
import React from 'react';
import { Category, Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Aviator Classic', brand: 'Ray-Ban', price: 650000, category: Category.SOL, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=200', badge: 'Best Seller' },
  { id: '2', name: 'Holbrook', brand: 'Oakley', price: 580000, category: Category.SOL, image: 'https://images.unsplash.com/photo-1511499767350-a1590fdb2ca8?auto=format&fit=crop&q=80&w=200' },
  { id: '3', name: 'Milan Round', brand: 'ABC Design', price: 320000, category: Category.OFTALMICAS, image: 'https://images.unsplash.com/photo-1509100104048-73c99a1f6bb8?auto=format&fit=crop&q=80&w=200', badge: 'Nuevo' },
  { id: '4', name: 'Acuvue Oasys', brand: 'Johnson & Johnson', price: 180000, category: Category.LENTES_CONTACTO, image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=200' },
];

const CatalogPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="gafas-oftalmicas">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black mb-4">Favoritos de la semana</h2>
            <p className="text-slate-600 max-w-lg">Explora los modelos más populares. Filtro de luz azul incluido en todos nuestros lentes oftálmicos.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-slate-300 font-bold hover:border-blue-600 hover:text-blue-600 transition-all">Ver todo</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative aspect-square rounded-2xl bg-slate-100 overflow-hidden mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded-md">
                    {product.badge}
                  </span>
                )}
                <button className="absolute bottom-2 right-2 bg-slate-900 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.brand}</p>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors truncate">{product.name}</h3>
                <p className="text-blue-600 font-black">${product.price.toLocaleString('es-CO')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;
