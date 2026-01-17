
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { REPAIR_GUIDES } from '../constants';
import { ArrowLeft, Clock, Wrench, Share2, MessageSquare, AlertTriangle } from 'lucide-react';

const GuideDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const guide = REPAIR_GUIDES.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không tìm thấy bài viết</h2>
        <button onClick={() => navigate('/guides')} className="text-blue-600 font-bold uppercase hover:underline">
          Quay lại danh sách hướng dẫn
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-500">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
        <Link to="/" className="hover:text-[#004a99]">Trang chủ</Link>
        <span>/</span>
        <Link to="/guides" className="hover:text-[#004a99]">Hướng dẫn</Link>
        <span>/</span>
        <span className="text-slate-600 line-clamp-1">{guide.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-2 py-1 rounded text-[10px] font-black uppercase italic border shadow-sm ${
                guide.difficulty === 'Khó' ? 'bg-red-600 text-white border-red-700' : 
                guide.difficulty === 'Trung bình' ? 'bg-amber-500 text-white border-amber-600' : 
                'bg-emerald-500 text-white border-emerald-600'
              }`}>
                Độ khó: {guide.difficulty}
              </span>
              <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1 uppercase">
                <Clock className="w-3 h-3" /> 15 phút đọc
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight uppercase italic">
              {guide.title}
            </h1>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl mb-8 border border-slate-200">
              <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
            </div>
          </header>

          <article className="prose prose-slate max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800 leading-relaxed italic">
                  <strong>Lưu ý:</strong> Các thao tác kỹ thuật có thể ảnh hưởng đến bảo hành của thiết bị. Hãy chắc chắn bạn đã sao lưu dữ liệu quan trọng trước khi thực hiện.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-black text-slate-900 uppercase italic mb-4 border-b pb-2">Nội dung hướng dẫn chi tiết</h3>
            <div className="text-slate-700 leading-relaxed space-y-4 whitespace-pre-wrap">
              {guide.content || "Nội dung đang được cập nhật..."}
              
              <p>Dưới đây là các bước cơ bản:</p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Kiểm tra tình trạng vật lý của TV Box và nguồn cấp.</li>
                <li>Kết nối thiết bị với máy tính qua cáp USB chuyên dụng (nếu cần).</li>
                <li>Mở công cụ phần mềm tương ứng và nạp file Firmware/Config.</li>
                <li>Đợi quá trình hoàn tất và khởi động lại thiết bị.</li>
              </ol>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded font-bold text-xs uppercase hover:bg-[#004a99] transition-all">
              <Share2 className="w-4 h-4" /> Chia sẻ
            </button>
            <Link to="/ai" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded font-bold text-xs uppercase hover:bg-blue-700 transition-all">
              <MessageSquare className="w-4 h-4" /> Hỏi AI về bài này
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-black text-slate-900 uppercase italic border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#E31B23]" /> Công cụ cần thiết
            </h3>
            <ul className="space-y-3">
              {guide.toolsNeeded.map((tool, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 italic">
                  <div className="w-1.5 h-1.5 bg-[#E31B23] rounded-full"></div>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-black uppercase italic mb-4">Bạn cần hỗ trợ?</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Nếu không tự tin thực hiện, hãy liên hệ đội ngũ kỹ thuật của chúng tôi để được tư vấn sửa chữa từ xa hoặc tại cửa hàng.
            </p>
            <div className="space-y-3">
              <a href="tel:0912345678" className="block w-full text-center py-2 bg-[#E31B23] rounded font-bold text-xs uppercase">
                Hotline: 09xx.xxx.xxx
              </a>
              <Link to="/ai" className="block w-full text-center py-2 border border-white/20 rounded font-bold text-xs uppercase hover:bg-white/10 transition-all">
                Chat với Chuyên Gia AI
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase italic border-b border-slate-200 pb-3 mb-5">Hướng dẫn khác</h3>
            <div className="space-y-6">
              {REPAIR_GUIDES.filter(g => g.id !== id).slice(0, 3).map(other => (
                <Link key={other.id} to={`/guides/${other.id}`} className="group flex gap-4">
                  <div className="w-20 h-20 bg-slate-200 rounded overflow-hidden shrink-0 border border-slate-100">
                    <img src={other.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#E31B23] line-clamp-2 leading-snug uppercase">
                      {other.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase mt-1 block">Xem thêm &raquo;</span>
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

export default GuideDetailPage;
