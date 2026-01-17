
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Wrench, Menu, X, 
  ShieldCheck, Zap, Download, Phone, 
  Mail, MapPin, Facebook, Youtube
} from 'lucide-react';

import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import GuidesPage from './pages/GuidesPage';
import GuideDetailPage from './pages/GuideDetailPage';
import CartPage from './pages/CartPage';
import AIAssistant from './pages/AIAssistant';
import { CartItem, Software } from './types';

// Component cuộn lên đầu trang khi chuyển link
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ cartCount }: { cartCount: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#E31B23] p-1.5 rounded transition-transform group-hover:rotate-12">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 uppercase italic">TVBOX<span className="text-[#E31B23]">PRO</span></span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-bold text-[11px] uppercase tracking-widest text-slate-600">
          <Link to="/" className="hover:text-[#E31B23] transition-colors">Trang chủ</Link>
          <Link to="/store" className="hover:text-[#E31B23] transition-colors">Cửa hàng</Link>
          <Link to="/guides" className="hover:text-[#E31B23] transition-colors">Kỹ thuật</Link>
          <Link to="/ai" className="hover:text-[#E31B23] transition-colors">Hỏi đáp AI</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 bg-slate-100 rounded-full hover:bg-[#E31B23] hover:text-white transition-all group">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E31B23] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-6 font-bold uppercase text-xs shadow-2xl animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3"><Zap className="w-4 h-4 text-[#E31B23]"/> Trang chủ</Link>
          <Link to="/store" onClick={() => setIsOpen(false)} className="flex items-center gap-3"><ShoppingBag className="w-4 h-4 text-[#E31B23]"/> Cửa hàng</Link>
          <Link to="/guides" onClick={() => setIsOpen(false)} className="flex items-center gap-3"><Wrench className="w-4 h-4 text-[#E31B23]"/> Kỹ thuật</Link>
          <Link to="/ai" onClick={() => setIsOpen(false)} className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#E31B23]"/> Hỗ trợ AI</Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-[#E31B23] p-1 rounded">
            <Wrench className="w-4 h-4 text-white" />
          </div>
          <span className="font-black text-white tracking-tighter uppercase italic">TVBOX PRO</span>
        </div>
        <p className="text-xs leading-relaxed mb-6 italic">
          Đơn vị tiên phong cung cấp giải pháp Firmware và sửa chữa Android TV Box chuyên nghiệp tại Việt Nam. 
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-slate-800 rounded hover:bg-[#E31B23] hover:text-white transition-all"><Facebook className="w-4 h-4"/></a>
          <a href="#" className="p-2 bg-slate-800 rounded hover:bg-[#E31B23] hover:text-white transition-all"><Youtube className="w-4 h-4"/></a>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-black uppercase text-xs mb-6 italic tracking-widest">Liên kết</h4>
        <ul className="text-xs space-y-4 font-bold uppercase">
          <li><Link to="/store" className="hover:text-white transition-colors">Phần mềm mới</Link></li>
          <li><Link to="/guides" className="hover:text-white transition-colors">Hướng dẫn sửa chữa</Link></li>
          <li><Link to="/ai" className="hover:text-white transition-colors">Yêu cầu trợ giúp</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase text-xs mb-6 italic tracking-widest">Liên hệ</h4>
        <ul className="text-xs space-y-4">
          <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#E31B23] shrink-0" /> Hà Nội: 123 Thái Hà, Đống Đa</li>
          <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#E31B23] shrink-0" /> 09xx.xxx.xxx</li>
          <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#E31B23] shrink-0" /> support@tvboxpro.vn</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase text-xs mb-6 italic tracking-widest">Tin cậy</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 p-3 rounded flex flex-col items-center justify-center text-center">
            <ShieldCheck className="w-6 h-6 text-[#E31B23] mb-2" />
            <span className="text-[10px] font-bold uppercase">Bảo hành 12th</span>
          </div>
          <div className="bg-slate-800 p-3 rounded flex flex-col items-center justify-center text-center">
            <Zap className="w-6 h-6 text-yellow-500 mb-2" />
            <span className="text-[10px] font-bold uppercase">Xử lý ngay</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase">
      <p>&copy; 2024 TVBOXPRO.VN - DESIGN BY TECH TEAM</p>
      <div className="flex gap-6 uppercase">
        <a href="#" className="hover:text-white">Điều khoản</a>
        <a href="#" className="hover:text-white">Bảo mật</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Software) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage onAddToCart={handleAddToCart} />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/:id" element={<GuideDetailPage />} />
            <Route path="/cart" element={<CartPage cart={cart} onRemove={handleRemoveFromCart} />} />
            <Route path="/ai" element={<AIAssistant />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
