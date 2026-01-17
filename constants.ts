
import { Product, Guide } from './types';

// Main product list for the store
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Firmware Android 12 - TX3 Mini',
    category: 'Firmware',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    description: 'Bản ROM mượt nhất 2024, hỗ trợ tìm kiếm giọng nói.',
    version: '12.0.4',
    fileSize: '1.2 GB'
  },
  {
    id: '2',
    name: 'Youtube Không Quảng Cáo (Vĩnh viễn)',
    category: 'Software',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400',
    description: 'Xem Youtube 4K cực mượt, không lo bị làm phiền.',
    version: '18.3.1',
    fileSize: '45 MB'
  },
  {
    id: '3',
    name: 'Launcher Android TV Pro',
    category: 'Interface',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    description: 'Giao diện tivi thông minh hiện đại.',
    version: '2.1.0',
    fileSize: '15 MB'
  }
];

// Export SOFTWARES as an alias for PRODUCTS to fix import errors in pages
export const SOFTWARES = PRODUCTS;

// Main guides list for the technical section
export const GUIDES: Guide[] = [
  {
    id: 'g1',
    title: 'Cách sửa TV Box bị treo Logo',
    excerpt: 'Hướng dẫn flash lại ROM khi máy không khởi động vào được màn hình chính.',
    description: 'Hướng dẫn flash lại ROM khi máy không khởi động vào được màn hình chính để khắc phục lỗi treo logo hiệu quả và nhanh chóng.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400',
    content: 'Bước 1: Tải công cụ flash ROM tương ứng với chip của máy. Bước 2: Cắm cáp USB 2 đầu vào máy tính và TV Box. Bước 3: Nhấn nút Reset và giữ trong khi nhấn Start trên phần mềm.',
    difficulty: 'Trung bình',
    toolsNeeded: ['Cáp USB 2 đầu', 'Máy tính Windows', 'Firmware gốc']
  },
  {
    id: 'g2',
    title: 'Xử lý lỗi Wifi yếu/Không kết nối',
    excerpt: 'Mẹo tối ưu sóng Wifi cho TV Box đời cũ.',
    description: 'Mẹo tối ưu sóng Wifi cho TV Box đời cũ giúp tăng tốc độ truy cập internet và ổn định kết nối không dây.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400',
    content: 'Hướng dẫn thay đổi DNS sang 8.8.8.8, nối thêm anten ngoài hoặc sử dụng bộ kích sóng Wifi để cải thiện tín hiệu cho Android TV Box.',
    difficulty: 'Dễ',
    toolsNeeded: ['Anten ngoài', 'Tua vít 4 cạnh', 'Keo dán chuyên dụng']
  }
];

// Export REPAIR_GUIDES as an alias for GUIDES to fix import errors in pages
export const REPAIR_GUIDES = GUIDES;
