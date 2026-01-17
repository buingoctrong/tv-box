
import React from 'react';
import { CartItem } from '../types';
import { Trash2, CreditCard, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartPageProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Giỏ hàng trống</h2>
        <p className="text-slate-500 mb-8">Bạn chưa thêm bất kỳ phần mềm nào vào giỏ hàng.</p>
        <Link to="/store" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
          <ArrowLeft className="w-5 h-5" /> Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-10">Giỏ Hàng Của Bạn</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-500">Phiên bản: {item.version}</p>
                <div className="mt-1 font-bold text-blue-600">
                  {item.price === 0 ? 'Miễn phí' : `${item.price.toLocaleString()}đ`}
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg h-fit">
          <h2 className="text-xl font-bold mb-6">Tóm tắt đơn hàng</h2>
          <div className="space-y-4 mb-6 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Sản phẩm ({cart.length})</span>
              <span>{total.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Giảm giá</span>
              <span className="text-green-600">-0đ</span>
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-extrabold text-slate-900">
              <span>Tổng cộng</span>
              <span className="text-blue-600">{total.toLocaleString()}đ</span>
            </div>
          </div>
          <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200">
            <CreditCard className="w-5 h-5" /> Thanh toán ngay
          </button>
          <p className="mt-4 text-[10px] text-center text-slate-400">
            Link tải sẽ được gửi vào Email sau khi thanh toán thành công.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
