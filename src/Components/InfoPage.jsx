import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function InfoPage() {
  const { section } = useParams();

  const renderContent = () => {
    switch (section) {
      case 've-chung-toi':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Về chúng tôi</h1>
            <p className="mb-2"><strong>Tên công ty:</strong> Công ty TNHH Liên doanh Stellapharm</p>
            <p className="mb-2"><strong>Địa chỉ:</strong> 40 Đại lộ Tự Do, KCN VSIP, Bình Dương</p>
            <p className="mb-2">
              <strong>Website:</strong>{' '}
              <a href="https://stellapharm.com/vi/about/" className="text-blue-600 underline">
                stellapharm.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:marketing@stellapharm.com" className="text-blue-600 underline">
                marketing@stellapharm.com
              </a>
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Lịch sử hình thành và phát triển</h2>
            <p className="text-justify">
              Năm 1995: Xây dựng nền tảng — Khương Duy là một trong những công ty dược tư nhân đầu tiên...
            </p>
          </div>
        );
      case 'san-pham':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Sản phẩm: Metformin STELLA 850mg</h1>
            <p><strong>Hoạt chất:</strong> Metformin hydrochloride</p>
            <p><strong>Chỉ định:</strong> Điều trị tiểu đường tuýp 2...</p>
            <p><strong>Liều dùng:</strong> 500–850mg x 2–3 lần/ngày sau bữa ăn.</p>
            <p><strong>Đối tượng:</strong> Người lớn, người cao tuổi,...</p>
          </div>
        );
      case 'kien-thuc':
        return <h1 className="text-2xl font-bold">Kiến thức về đái tháo đường (đang cập nhật)</h1>;
      case 'tin-tuc':
        return <h1 className="text-2xl font-bold">Tin tức chương trình (đang cập nhật)</h1>;
      default:
        return <p className="text-gray-500">Chọn một mục từ thanh bên để xem nội dung.</p>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <div className="flex-1 bg-white p-6 rounded shadow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}