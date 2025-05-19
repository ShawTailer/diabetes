import React from 'react';


const Navbar = () => {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://diab.com.vn/wp-content/uploads/2023/08/LogoDIAB.png"
                alt="DIAB Logo"
                className="h-10"
              />
            </a>
          </div>
  
          {/* Menu Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li>
              <a href="/gioi-thieu" className="hover:text-blue-600">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="/tin-tuc" className="hover:text-blue-600">
                Tin tức
              </a>
            </li>
            <li>
              <a href="/san-pham" className="hover:text-blue-600">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-600">
                Câu hỏi thường gặp
              </a>
            </li>
            <li>
              <a href="/lien-he" className="hover:text-blue-600">
                Liên hệ
              </a>
            </li>
          </ul>
  
          {/* Button */}
          <div className="hidden md:block">
            <a
              href="/dat-hang"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Đặt hàng
            </a>
          </div>
  
          {/* Mobile Menu (Optional for smaller screens) */}
          {/* You can add a hamburger menu here if needed */}
        </div>
      </nav>
    );
  };
  
export default Navbar;