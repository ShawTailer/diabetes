import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    img: "https://diab.com.vn/wp-content/uploads/2023/08/banner_1-2-scaled.jpg",
    alt: "Banner 1",
  },
  {
    img: "https://diab.com.vn/wp-content/uploads/2023/08/banner_2-scaled.jpg",
    alt: "Banner 2",
  },
];

const BannerSlider = () => {
  return (
    <div className="ss-home-banner-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="home-slider"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-[400px] object-cover md:h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;