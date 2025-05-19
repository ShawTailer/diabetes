import React from "react";
import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Main Content */}
      <main className="flex-grow">
        <BannerSlider />

        {/* You can add more homepage sections here */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to DIAB</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp hỗ trợ người tiểu đường với sản phẩm chất lượng cao, được nghiên cứu và phát triển bởi các chuyên gia hàng đầu.
          </p>
        </section>
      </main>

    </div>
  );
};

export default Home;