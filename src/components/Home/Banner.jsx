"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner1 from "../../../public/static/banner/banner_1.jpg";
import banner2 from "../../../public/static/banner/banner_2.jpg";
import banner3 from "../../../public/static/banner/banner_3.jpg";

export default function Banner() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: "5000", disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${banner1?.src})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner2?.src})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner3?.src})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
