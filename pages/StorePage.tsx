
import React, { useState } from 'react';
import { SOFTWARES } from '../constants';
import { Software } from '../types';
import { ShoppingCart, Download, Tag, Search, Filter } from 'lucide-react';

interface StorePageProps {
  onAddToCart: (sw: Software) => void;
}

const StorePage: React.FC<StorePageProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Firmware', 'Launcher', 'Utility', 'Entertainment'];

  const filtered = filter === 'All' 
    ? SOFTWARES 
    : SOFTWARES.filter(sw => sw.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Kho Phần Mềm & ROM TVBox</h1>
          <p className="text-slate-500 mt-2 text-sm max-w-xl">
            Tất cả phần mềm đều được kỹ thuật viên của chúng tôi kiểm duyệt, đảm bảo không mã độc và tối ưu tốt nhất cho phần cứng.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white border border-slate-200 px-3 py-2 rounded">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent text-sm font-bold outline-none"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'Tất cả danh mục' : cat}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(sw => (
          <div key={sw.id} className="bg-white border border-slate-200 flex flex-col group hover:border-[#004a99] hover:shadow-lg transition-all">
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img src={sw.image} alt={sw.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                VER {sw.version}
              </div>
            </div>
            <div className="p-5 flex-grow">
              <div className="text-[10px] font-black text-[#004a99] uppercase mb-1 tracking-wider">{sw.category}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#004a99] transition-colors uppercase">
                {sw.name}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-6 leading-relaxed">
                {sw.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-bold uppercase mb-4">
                <div className="flex items-center gap-1 bg-slate-50 p-1.5 border border-slate-100"><Download className="w-3 h-3" /> {sw.fileSize}</div>
                <div className="flex items-center gap-1 bg-slate-50 p-1.5 border border-slate-100"><Tag className="w-3 h-3" /> Android 11+</div>
              </div>
            </div>
            <div className="px-5 pb-5 mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
              <span className="text-lg font-black text-slate-900 italic">
                {sw.price === 0 ? 'MIỄN PHÍ' : `${sw.price.toLocaleString()}đ`}
              </span>
              <button 
                onClick={() => onAddToCart(sw)}
                className="flex items-center gap-2 bg-[#004a99] text-white px-4 py-2.5 rounded text-[10px] font-bold uppercase hover:bg-slate-900 transition-all"
              >
                <ShoppingCart className="w-4 h-4" /> Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
