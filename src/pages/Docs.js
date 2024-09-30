import React from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import docs1 from "../img/docs/1.JPG";
import docs2 from "../img/docs/2.JPG";
import docs3 from "../img/docs/3.JPG";
import docs4 from "../img/docs/4.JPG";
import docs5 from "../img/docs/5.JPG";
import docs6 from "../img/docs/6.JPG";
import docs7 from "../img/docs/7.JPG";
import docs8 from "../img/docs/8.JPG";
import docs9 from "../img/docs/9.JPG";
import docs10 from "../img/docs/10.JPG";
import docs11 from "../img/docs/11.JPG";

const images = [
  docs1,
  docs2,
  docs3,
  docs4,
  docs5,
  docs6,
  docs7,
  docs8,
  docs9,
  docs10,
  docs11,
];

export function Docs() {
  return (
    <div className="main-page">
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
