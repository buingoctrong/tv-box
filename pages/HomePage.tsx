
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, ShieldCheck, Zap, Wrench, ChevronRight, 
  Download, Book, Activity, MessageSquare, Smartphone, 
  Settings, Monitor, Wifi, Home, Lock, Radio, Database
} from 'lucide-react';
import { SOFTWARES, REPAIR_GUIDES } from '../constants';

const HomePage: React.FC = () => {
  const technicalCategories = [
    { name: 'Tổng hợp Rom Android Box', icon: <Database className="w-4 h-4" /> },
    { name: 'Hướng dẫn cập nhật Firmware', icon: <Zap className="w-4 h-4" /> },
    { name: 'Ứng dụng và Thủ thuật', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Hướng dẫn sử dụng Máy Chiếu', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Hướng dẫn sử dụng Khóa Điện Tử', icon: <Lock className="w-4 h-4" /> },
    { name: 'Hướng dẫn XBMC/KODI', icon: <Activity className="w-4 h-4" /> },
    { name: 'Camera & Smart Home', icon: <Home className="w-4 h-4" /> },
    { name: 'Hướng dẫn Camera IP HKCam', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Hướng dẫn Camera WiFi Vimtag', icon: <Wifi className="w-4 h-4" /> },
    { name: 'HDSD Thiết bị Router 3G WIFI', icon: <Radio className="w-4 h-4" /> },
  ];

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      {/* Featured Header Area */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Main Featured Slide */}
            <div className="lg:col-span-2 p-8 lg:p-12 border-r border-slate-100 flex flex-col justify-center">
              <span className="text-[#004a99] font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4" /> Tiêu điểm kỹ thuật
              </span>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase italic">
                Cập nhật Firmware <span className="text-[#004a99]">Android 12</span> Cho Chip Amlogic
              </h1>
              <p className="text-slate-600 text-lg mb-8 max-w-xl">
                Tối ưu hóa hiệu năng cực đỉnh, hỗ trợ 4K mượt mà, loại bỏ hoàn toàn giật lag cho các dòng TV Box cũ.
              </p>
              <div className="flex gap-4">
                <Link to="/store" className="bg-[#E31B23] text-white px-8 py-4 font-bold uppercase text-sm hover:bg-[#b3151b] transition-all rounded shadow-lg shadow-red-200">
                  Tải ngay bản ROM
                </Link>
                <Link to="/guides" className="border-2 border-slate-900 text-slate-900 px-8 py-4 font-bold uppercase text-sm hover:bg-slate-900 hover:text-white transition-all rounded">
                  Xem tất cả hướng dẫn
                </Link>
              </div>
            </div>
            
            {/* Sidebar Featured */}
            <div className="bg-slate-50 p-8 flex flex-col gap-6">
              <h3 className="font-bold text-slate-900 uppercase border-b border-slate-200 pb-2 text-sm italic">Tin tức mới nhất</h3>
              {REPAIR_GUIDES.slice(0, 3).map(guide => (
                <Link key={guide.id} to={`/guides/${guide.id}`} className="group flex gap-4 items-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                    <img src={guide.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-800 group-hover:text-[#E31B23] line-clamp-2 leading-snug uppercase">
                      {guide.title}
                    </h4>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mt-1 block tracking-wider">Kỹ thuật phần cứng</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        
        {/* New Software Section */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8 border-b-2 border-[#E31B23] pb-2">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">Phần mềm & ROM mới</h2>
            <Link to="/store" className="text-xs font-bold text-[#E31B23] uppercase hover:underline">Tất cả &raquo;</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SOFTWARES.map(sw => (
              <div key={sw.id} className="bg-white border border-slate-100 group flex flex-col p-3 hover:shadow-lg transition-all rounded-lg">
                <div className="relative overflow-hidden aspect-square mb-3 rounded-lg bg-slate-50 border border-slate-50">
                  <img src={sw.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-grow text-center">
                  <h3 className="text-[11px] font-bold text-slate-900 mb-1 group-hover:text-[#E31B23] transition-colors line-clamp-2 uppercase leading-tight">
                    {sw.name}
                  </h3>
                  <div className="text-[10px] font-black text-[#E31B23] italic">
                    {sw.price === 0 ? 'MIỄN PHÍ' : `${sw.price.toLocaleString()}đ`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guides Section with Sidebar Category */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Category - itvplus style */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm sticky top-24">
              <div className="bg-[#E31B23] px-4 py-3 flex items-center justify-between">
                <h3 className="text-sm font-black uppercase text-white italic flex items-center gap-2">
                  <Wrench className="w-4 h-4" /> Hỗ trợ kỹ thuật
                </h3>
                <span className="bg-yellow-400 text-[#E31B23] text-[9px] font-black px-1.5 py-0.5 rounded italic">HOT</span>
              </div>
              <nav className="flex flex-col">
                {technicalCategories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to="/guides"
                    className="flex items-center gap-3 px-4 py-3 text-[11px] font-bold uppercase text-slate-700 border-b border-slate-100 hover:bg-slate-50 hover:text-[#E31B23] transition-all group"
                  >
                    <span className="text-slate-400 group-hover:text-[#E31B23] transition-colors">
                      {cat.icon}
                    </span>
                    {cat.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Guides Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-6 border-b-2 border-slate-800 pb-2">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Kỹ thuật sửa chữa</h2>
              <Link to="/guides" className="text-[10px] font-bold text-slate-500 uppercase hover:underline italic">Xem tất cả &raquo;</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REPAIR_GUIDES.slice(0, 6).map(guide => (
                <Link key={guide.id} to={`/guides/${guide.id}`} className="bg-white border border-slate-200 flex flex-col group hover:border-[#E31B23] hover:shadow-md transition-all rounded overflow-hidden">
                  <div className="relative overflow-hidden aspect-[16/10] border-b border-slate-100">
                    <img src={guide.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2">
                      <span className="text-[8px] font-black px-1.5 py-0.5 bg-white/90 text-[#E31B23] uppercase italic border border-slate-200 shadow-sm">
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-[12px] font-bold text-slate-900 mb-2 group-hover:text-[#E31B23] transition-colors leading-tight line-clamp-2 uppercase">
                      {guide.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                      {guide.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[9px] font-black text-[#E31B23] flex items-center gap-1 uppercase tracking-wider">
                        Đọc chi tiết <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
