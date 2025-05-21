import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Floating Contact Buttons */}
      <div className="fixed right-6 bottom-24 z-[1000]">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0068FF] hover:bg-[#0051c7] shadow-lg transition-all duration-300 hover:scale-110"
          style={{ boxShadow: '0 4px 12px rgba(0,104,255,0.4)' }}
        >
          <img src="/images/zalo-icon.svg" alt="Contact via Zalo" className="w-10 h-10" />
        </a>
      </div>

      <div className="fixed right-6 bottom-6 z-[1000]">
        <a
          href="tel:0931888888"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ea855] shadow-lg transition-all duration-300 hover:scale-110"
          style={{ boxShadow: '0 4px 12px rgba(37,211,102,0.4)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      <footer className="bg-white py-8 border-t relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div>
              <h3 className="font-bold text-lg mb-4">STELLA Medical Technology Company Limited:</h3>
              
              {/* Vietnam Office */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">⭐ Office in Viet Nam</h4>
                <p className="text-gray-600 mb-2">Address: L17-11 17th Floor, Vincom Center Building, 72 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC</p>
                <a href="mailto:lienhe@stella.com.vn" className="text-blue-600 block mb-1">lienhe@stella.com.vn</a>
                <a href="tel:0931888888" className="text-blue-600">0931888888</a>
              </div>

              {/* Singapore Office */}
              <div>
                <h4 className="font-semibold mb-2">⭐ Office in Singapore</h4>
                <p className="text-gray-600 mb-2">Address: 68 Circular Road #02-01, Singapore (049422)</p>
                <a href="mailto:lienhe@stella.com.vn" className="text-blue-600">lienhe@stella.com.vn</a>
              </div>
            </div>

            {/* Policy Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Policy</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Policy terms of use</Link></li>
              </ul>

              {/* Advise Me Form */}
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-4">Advise me</h3>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="px-4 py-2 border rounded-lg flex-grow"
                  />
                  <button className="bg-[#B07E3A] text-white px-4 py-2 rounded-lg hover:bg-[#8e6730]">
                    Call me
                  </button>
                </div>
              </div>
            </div>

            {/* Get the App */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get the app</h3>
              <div className="flex flex-col items-center gap-4">
                <img src="/images/qr-code.svg" alt="QR Code" className="w-32 h-32" />
                <img src="/images/app-icon.svg" alt="App Icon" className="w-24 h-24" />
                <p className="text-center">Update our information at</p>
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/images/zalo-icon.svg" alt="Zalo" className="w-8 h-8" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/images/facebook-icon.svg" alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 pt-4 border-t text-sm text-gray-600 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/images/bo-cong-thuong.svg" alt="Bo Cong Thuong" className="h-12" />
              <div>
                <p>Business Registration Certificate No. 0316581262, Issued on 11/10/2020</p>
                <p>First change: February 8, 2021</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Solution | Copyright belongs to diaB | </span>
              <a href="https://maria.media" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                Designed by Maria Media
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;