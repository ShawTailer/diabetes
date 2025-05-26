import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  PrinterIcon,
} from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <>
      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-24 z-[1000]">
        <a
          href="/gioi-thieu"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0068FF] hover:bg-[#0051c7] shadow-lg transition-all duration-300 hover:scale-110 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:blur-xl before:opacity-60 before:animate-pulse"
          style={{ boxShadow: '0 4px 12px rgba(0,104,255,0.4)' }}
        >
          <img src="/zalo-fix.png" alt="Contact via Zalo" className="w-10 h-10" />
        </a>
      </div>

      <div className="fixed right-6 bottom-6 z-[1000]">
        <a
          href="tel:113"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ea855] shadow-lg transition-all duration-300 hover:scale-110"
          style={{ boxShadow: '0 4px 12px rgba(37,211,102,0.4)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      <footer className="bg-white py-8 border-t relative m-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h3 className="font-bold text-lg mb-4">CÔNG TY TNHH STELLAPHARM:</h3>
              <h2 className='text-medium font-bold mb-4'>Tên đầy đủ: Công ty TNHH Liên doanh Stellapharm</h2>
              {/* Vietnam Office */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">⭐ Văn phòng tại Việt Nam</h4>
                <p className="text-gray-600 mb-2">Địa chỉ: 40 Đại lộ Tự Do, Khu công nghiệp Việt Nam – Singapore, Phường An Phú - TP. Thuận An - Tỉnh Bình Dương</p>
                <div className="flex flex-col space-y-2 ">
                  <a
                    href="mailto:marketing@stellapharm.com"
                    className="inline-flex items-center text-[rgb(85,85,85)] text-[18px] font-normal hover:underline font-['Roboto','sans-serif']"
                  >
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    marketing@stellapharm.com
                  </a>

                  <a
                    href="tel:02743767470"
                    className="inline-flex items-center text-[rgb(85,85,85)] text-[18px] font-normal hover:underline font-['Roboto','sans-serif']"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    02743767470
                  </a>

                  <a
                    href="fax:02743767470"
                    className="inline-flex items-center text-[rgb(85,85,85)] text-[18px] font-normal hover:underline font-['Roboto','sans-serif']"
                  >
                    <PrinterIcon className="w-5 h-5 mr-2" />
                    02743767470
                  </a>
                </div>
              </div>
            </div>

            {/* Policy Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Chính sách</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Chính sách bảo mật thông tin</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Điều khoản sử dụng</Link></li>
              </ul>

              {/* Advise Me Form */}
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-4">Tư vấn cho tôi</h3>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="px-4 py-2 border rounded-2xl flex-grow"
                  />
                  <button className="bg-[#8e6732] text-white px-4 py-2 rounded-2xl hover:bg-[#8e6730]">
                    Gọi cho tôi
                  </button>
                </div>
              </div>
            </div>

            {/* Get the App */}
            <div>
              <h3 className="font-bold text-lg mb-4">Cập nhật thêm thông tin chúng tôi tại</h3>
              <div className="flex flex-col gap-4">
                
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/zalo-logo.png" alt="Zalo" className="w-9 h-9" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/images/facebook-icon.svg" alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/linkedin-logo.png" alt="LinkedIn" className="w-9 h-9" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;