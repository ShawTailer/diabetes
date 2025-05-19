const Footer = () => {
    return (
      <footer className="bg-[#123B7A] text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
          {/* Company Info */}
          <div>
            <img
              src="https://diab.com.vn/wp-content/uploads/2023/08/LogoDIAB.png"
              alt="DIAB Logo"
              className="h-12 mb-4"
            />
            <p className="mb-2">CÔNG TY TNHH DƯỢC PHẨM DIAB</p>
            <p>GPĐKKD số: 0318017290</p>
            <p>Địa chỉ: 46 Phổ Quang, P. 2, Q. Tân Bình, TP.HCM</p>
            <p>Điện thoại: 028 3948 1103</p>
          </div>
  
          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2">
              <li>
                <a href="/gioi-thieu" className="hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/tin-tuc" className="hover:underline">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/san-pham" className="hover:underline">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="/lien-he" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
  
          {/* Facebook Fanpage Embed (optional) */}
          <div>
            <h4 className="font-semibold mb-4">Fanpage</h4>
            <div className="w-full">
              <iframe
                title="DIAB Fanpage"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiabvn&tabs=timeline&width=340&height=150&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="150"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
  
        {/* Bottom line */}
        <div className="bg-[#0f2f60] text-center py-3 text-xs">
          &copy; {new Date().getFullYear()} DIAB Co., Ltd. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;