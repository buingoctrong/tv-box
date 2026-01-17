
import React from 'react';
import { Link } from 'react-router-dom';
import { REPAIR_GUIDES } from '../constants';
import { BookOpen, ChevronRight, Clock, Wrench } from 'lucide-react';

const GuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Thư Viện Hướng Dẫn Kỹ Thuật</h1>
        <p className="text-lg text-slate-600">Tổng hợp các kiến thức sửa chữa, nâng cấp Firmware và thủ thuật sử dụng Android TV Box từ cơ bản đến chuyên sâu.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {REPAIR_GUIDES.map(guide => (
          <Link key={guide.id} to={`/guides/${guide.id}`} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#E31B23] transition-all flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-lg group">
            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
              <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase italic ${
                  guide.difficulty === 'Khó' ? 'bg-red-100 text-red-600 border border-red-200' : 
                  guide.difficulty === 'Trung bình' ? 'bg-amber-100 text-amber-600 border border-amber-200' : 
                  'bg-green-100 text-green-600 border border-green-200'
                }`}>
                  {guide.difficulty}
                </span>
                <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1 uppercase">
                  <Clock className="w-3 h-3" /> 15 phút đọc
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#E31B23] transition-colors uppercase italic tracking-tight">{guide.title}</h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2 italic">{guide.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {guide.toolsNeeded.slice(0, 3).map(tool => (
                  <span key={tool} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase rounded border border-slate-100 flex items-center gap-1">
                    <Wrench className="w-2.5 h-2.5 opacity-50" /> {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-[#E31B23] font-black text-xs uppercase tracking-widest group-hover:gap-2 transition-all italic">
                Xem hướng dẫn chi tiết <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GuidesPage;
