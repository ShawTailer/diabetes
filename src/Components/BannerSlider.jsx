import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    img: "/images/Banners/1.png",
    alt: "Banner 1",
  },
  {
    img: "/images/Banners/2.jpg",
    alt: "Banner 2",
    overlay: {
      title: {
        line1: "CHƯƠNG TRÌNH HƯỚNG DẪN",
        line2: "THAY ĐỔI LỐI SỐNG",
      },
      description: "Giải pháp giúp người bệnh mạn tính trang bị kiến thức và kỹ năng chăm sóc sức khỏe trên các khía cạnh dinh dưỡng, vận động, tâm lý, bệnh lý và phòng tránh biến chứng, nhằm cải thiện sức khỏe toàn diện.",
      button: "XEM THÊM"
    }
  },
];

const BannerSlider = () => {
  return (
    <div className="ss-home-banner-slider relative bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="home-slider"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            <div className="relative w-full max-h-[600px] overflow-hidden">
  <img
    src={banner.img}
    alt={banner.alt}
    className="w-full h-[600px] object-cover "
    loading="lazy"
  />

  {banner.overlay && (
    <div className="absolute inset-0 flex items-center justify-start m-16 bg-opacity-30 z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl text-black font-normal">
          <h2 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ">
            <div>{banner.overlay.title.line1}</div>
            <div className="text-[#B07E3A] mt-6">{banner.overlay.title.line2}</div>
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 lg:mb-8 max-w-xl">
            {banner.overlay.description}
          </p>
          <button className="bg-[#3EB489] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#2D8B6A] transition-colors">
            {banner.overlay.button}
          </button>
        </div>
      </div>
    </div>
  )}
</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-slide {
          display: flex !important;
          align-items: center;
          justify-content: center;
          height: auto !important;
          max-height: 600px;
          background: white;
        }
        .swiper-slide img {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;