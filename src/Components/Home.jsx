import React from "react";
import BannerSlider from "./BannerSlider";

const StatCard = ({ percentage, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <h2 className="text-[#3EB489] text-6xl font-bold mb-4">{percentage}</h2>
    <p className="text-gray-700 text-lg">{description}</p>
  </div>
);

const VideoTestimonial = ({ name, videoId }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`Testimonial by ${name}`}
        className="w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="text-center">
      <h3 className="font-semibold text-lg">{name}</h3>
    
    </div>
  </div>
);

const Home = () => {
  const stats = [
    {
      percentage: "90%",
      description: "Học viên đạt được mục tiêu cải thiện đường huyết, cân nặng, huyết áp...sau chương trình."
    },
    {
      percentage: "1,2%",
      description: "Là mức giảm HbA1c trung bình của học viên sau chương trình."
    },
    {
      percentage: "5%",
      description: "Là mức giảm cân trung bình của người bệnh thừa cân, béo phì sau chương trình."
    },
    {
      percentage: "98%",
      description: "Học viên đánh giá rất hài lòng về chương trình."
    }
  ];

  const testimonials = [
    {
      name: "Sự Thật Gây Sốc Về Đái Tháo Đường Type 2 Và Cách Bạn Có Thể Tự Bảo Vệ Mình?",
      videoId: "g2nh6WIpoFA" // Add YouTube video ID here
    },
    {
      name: "TOP Thực Phẩm Cứu Sống Người Bệnh Tiểu Đường Type 2",
      videoId: "-P62nQdLuhU" // Add YouTube video ID here
    },
    {
      name: "Hiểu đúng về bệnh di truyền: Đái tháo đường type 2",
      videoId: "JxA8bLi-nwM" // Add YouTube video ID here
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">


      {/* Main Content */}
      <main className="flex-grow">
        <BannerSlider />

        {/* You can add more homepage sections here */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Chào bạn tới Stella</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp hỗ trợ người tiểu đường với sản phẩm chất lượng cao, được nghiên cứu và phát triển bởi các chuyên gia hàng đầu.
          </p>
        </section>

        {/* Achievement Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold mb-12">
              <span className="text-[#8B4513]">Stella</span>
              <span className="text-[#006400]"> – Thành tựu đạt được</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-4 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#006400]">
              Kiến thức về đái tháo đường
            </h2>
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-none w-[400px] snap-center">
                  <div className="w-full">
                    <VideoTestimonial {...testimonial} />
                  </div>
                </div>
                ))}
              </div>
              {/* Navigation arrows can be added here if needed */}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;