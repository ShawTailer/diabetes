import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/stella-logo.jpg" alt="Diab" className="w-40 h-auto object-contain" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <li><Link to="/info/ve-chung-toi" className="hover:text-blue-600 transition">Giới thiệu</Link></li>
          <li><Link to="/info/tin-tuc" className="hover:text-blue-600 transition">Tin tức</Link></li>
          <li><Link to="/info/san-pham" className="hover:text-blue-600 transition">Sản phẩm</Link></li>
          <li><Link to="/info/kien-thuc" className="hover:text-blue-600 transition">Kiến thức</Link></li>
          <li>
            <a
              href="https://store.diab.com.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              Liên hệ
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation Links - Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 font-medium text-gray-700">
            <li><Link to="/info/ve-chung-toi" onClick={() => setIsOpen(false)}>Giới thiệu</Link></li>
            <li><Link to="/info/tin-tuc" onClick={() => setIsOpen(false)}>Tin tức</Link></li>
            <li><Link to="/info/san-pham" onClick={() => setIsOpen(false)}>Sản phẩm</Link></li>
            <li><Link to="/info/kien-thuc" onClick={() => setIsOpen(false)}>Kiến thức</Link></li>
            <li>
              <a
                href="https://store.diab.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
