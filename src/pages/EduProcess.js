import React from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import docs1 from "../img/EduProcess/1.JPG";
import docs2 from "../img/EduProcess/2.JPG";
import docs3 from "../img/EduProcess/3.JPG";
import docs4 from "../img/EduProcess/4.JPG";
import docs5 from "../img/EduProcess/5.JPG";
import docs6 from "../img/EduProcess/6.JPG";
import docs7 from "../img/EduProcess/7.JPG";
import docs8 from "../img/EduProcess/8.JPG";
import docs9 from "../img/EduProcess/9.JPG";

const images = [docs1, docs2, docs3, docs4, docs5, docs6, docs7, docs8, docs9];
export function EduProcess() {
  return (
    <div className="main-page main-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`project${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
