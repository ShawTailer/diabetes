import {  FaMapMarkerAlt, FaClock, FaStore } from "react-icons/fa";

export default function MyIntroPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center bg-white shadow px-6 py-4">
        <a href="https://zalo.me/" target="_blank" rel="noreferrer">
          <img
            className="h-8"
            src="https://stc-zaloprofile.zdn.vn/profile/assets/zalo-logo.png"
            alt="Zalo Logo"
          />
        </a>
      </header>

      <main className="section px-4 py-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Profile */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="/avarta.png"
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#00665C]">Phát Nguyễn</h1>
              <p className="text-sm text-gray-600">Software Developer | Flutter ,React, Node.js, Java, Golang,...</p>

            </div>
          </div>

          <h2 className="text-lg font-semibold text-[#00665C]">Thông tin chi tiết</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Đồng Nai</li>
            <li className="flex items-center gap-2"><FaClock /> Lúc đóng lúc mở</li>
            <li className="flex items-center gap-2"><FaStore /> <a href="https://www.youtube.com/shorts/7-ATfc4RoJY" target="_blank" rel="noreferrer">youtube.com</a></li>
          </ul>

          <p className="text-gray-700 mt-4 text-sm">
          Tôi là lập trình viên làm web dui. Giao diện mượt, tốc độ nhanh, tối ưu từng pixel tùy theo tâm trạng.
          </p>
        </div>

        {/* QR Code */}
        <figure className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src="hotronguoingheo.png"
            alt="QR Code"
            className="w-40 h-40"
          />
          <figcaption className="text-sm text-center text-gray-600 mt-2">
            Quét mã hỗ trợ bạn
          </figcaption>
        </figure>
      </main>

      {/* Services */}
      <section className="px-4 py-10 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-[#00665C] mb-4">Dịch vụ cung cấp</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="https://vt.tiktok.com/ZShwMSmPC/" target="_blank" rel="noreferrer" className="bg-white shadow px-6 py-3 rounded hover:bg-blue-50">Chương trình tư vấn cho người nghèo</a>
          <a href="https://www.tiktok.com/@chutichnhaunhau/video/7390415404214045970?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="bg-white shadow px-6 py-3 rounded hover:bg-blue-50">Ngủ</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} . All rights reserved.
      </footer>
    </div>
  );
}
