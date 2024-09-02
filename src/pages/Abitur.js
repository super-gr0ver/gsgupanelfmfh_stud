import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import ab1 from '../img/abitur/ab1.jpg';
// import ab2 from '../img/abitur/ab2.jpg';

// import ffl1 from '../img/abitur/ffl/1.jpg';
// import ffl2 from '../img/abitur/ffl/2.jpg';
// import ffl3 from '../img/abitur/ffl/3.jpg';
// import ffl4 from '../img/abitur/ffl/4.jpg';
// import ffl5 from '../img/abitur/ffl/5.jpg';
// import ffl6 from '../img/abitur/ffl/6.jpg';
// import ffl7 from '../img/abitur/ffl/7.jpg';
// import ffl8 from '../img/abitur/ffl/8.jpg';

// import fius1 from '../img/abitur/fius/1.jpg';
// import fius2 from '../img/abitur/fius/2.jpg';
// import fius3 from '../img/abitur/fius/3.jpg';
// import fius4 from '../img/abitur/fius/4.jpg';
// import fius5 from '../img/abitur/fius/5.jpg';
// import fius6 from '../img/abitur/fius/6.jpg';
// import fius7 from '../img/abitur/fius/7.jpg';
// import fius8 from '../img/abitur/fius/8.jpg';
// import fius9 from '../img/abitur/fius/9.jpg';
// import fius10 from '../img/abitur/fius/10.jpg';
// import fius11 from '../img/abitur/fius/11.jpg';
// import fius12 from '../img/abitur/fius/12.jpg';
// import fius13 from '../img/abitur/fius/13.jpg';
// import fius14 from '../img/abitur/fius/14.jpg';
// import fius15 from '../img/abitur/fius/15.jpg';
// import fius16 from '../img/abitur/fius/16.jpg';
// import fius17 from '../img/abitur/fius/17.jpg';
// import fius18 from '../img/abitur/fius/18.jpg';

import fmfh1 from "../img/abitur/fmfh/1.jpg";
import fmfh2 from "../img/abitur/fmfh/2.jpg";
import fmfh3 from "../img/abitur/fmfh/3.jpg";
import fmfh4 from "../img/abitur/fmfh/4.jpg";
import fmfh5 from "../img/abitur/fmfh/5.jpg";
import fmfh6 from "../img/abitur/fmfh/6.jpg";
import fmfh7 from "../img/abitur/fmfh/7.jpg";
import fmfh8 from "../img/abitur/fmfh/8.jpg";

// import pf1 from '../img/abitur/pf/1.jpg';
// import pf2 from '../img/abitur/pf/2.jpg';
// import pf3 from '../img/abitur/pf/3.jpg';
// import pf4 from '../img/abitur/pf/4.jpg';
// import pf5 from '../img/abitur/pf/5.jpg';
// import pf6 from '../img/abitur/pf/6.jpg';
// import pf7 from '../img/abitur/pf/7.jpg';
// import pf8 from '../img/abitur/pf/8.jpg';
// import pf9 from '../img/abitur/pf/9.jpg';
// import pf10 from '../img/abitur/pf/10.jpg';
// import pf11 from '../img/abitur/pf/11.jpg';
// import pf12 from '../img/abitur/pf/12.jpg';
// import pf13 from '../img/abitur/pf/13.jpg';

// import spf1 from '../img/abitur/spf/1.jpg';
// import spf2 from '../img/abitur/spf/2.jpg';
// import spf3 from '../img/abitur/spf/3.jpg';
// import spf4 from '../img/abitur/spf/4.jpg';
// import spf5 from '../img/abitur/spf/5.jpg';
// import spf6 from '../img/abitur/spf/6.jpg';
// import spf7 from '../img/abitur/spf/7.jpg';
// import spf8 from '../img/abitur/spf/8.jpg';
// import spf9 from '../img/abitur/spf/9.jpg';
// import spf10 from '../img/abitur/spf/10.jpg';

// import tf1 from '../img/abitur/tf/1.jpg';
// import tf2 from '../img/abitur/tf/2.jpg';
// import tf3 from '../img/abitur/tf/3.jpg';
// import tf4 from '../img/abitur/tf/4.jpg';
// import tf5 from '../img/abitur/tf/5.jpg';
// import tf6 from '../img/abitur/tf/6.jpg';
// import tf7 from '../img/abitur/tf/7.jpg';
// import tf8 from '../img/abitur/tf/8.jpg';
// import tf9 from '../img/abitur/tf/9.jpg';
// import tf10 from '../img/abitur/tf/10.jpg';
// import tf11 from '../img/abitur/tf/11.jpg';
// import tf12 from '../img/abitur/tf/12.jpg';

// import ffkis1 from '../img/abitur/ffkis/1.jpg';
// import ffkis2 from '../img/abitur/ffkis/2.jpg';
// import ffkis3 from '../img/abitur/ffkis/3.jpg';
// import ffkis4 from '../img/abitur/ffkis/4.jpg';
// import ffkis5 from '../img/abitur/ffkis/5.jpg';
// import ffkis6 from '../img/abitur/ffkis/6.jpg';
// import ffkis7 from '../img/abitur/ffkis/7.jpg';

// import ff1 from '../img/abitur/ff/1.jpg';
// import ff2 from '../img/abitur/ff/2.jpg';
// import ff3 from '../img/abitur/ff/3.jpg';
// import ff4 from '../img/abitur/ff/4.jpg';
// import ff5 from '../img/abitur/ff/5.jpg';
// import ff6 from '../img/abitur/ff/6.jpg';
// import ff7 from '../img/abitur/ff/7.jpg';
// import ff8 from '../img/abitur/ff/8.jpg';

// import ef1 from '../img/abitur/ef/1.jpg';
// import ef2 from '../img/abitur/ef/2.jpg';
// import ef3 from '../img/abitur/ef/3.jpg';
// import ef4 from '../img/abitur/ef/4.jpg';
// import ef5 from '../img/abitur/ef/5.jpg';
// import ef6 from '../img/abitur/ef/6.jpg';
// import ef7 from '../img/abitur/ef/7.jpg';

// import uf1 from '../img/abitur/uf/1.jpg';
// import uf2 from '../img/abitur/uf/2.jpg';
// import uf3 from '../img/abitur/uf/3.jpg';
// import uf4 from '../img/abitur/uf/4.jpg';
// import uf5 from '../img/abitur/uf/5.jpg';
// import uf6 from '../img/abitur/uf/6.jpg';
// import uf7 from '../img/abitur/uf/7.jpg';
// import uf8 from '../img/abitur/uf/8.jpg';
// import uf9 from '../img/abitur/uf/9.jpg';
// import uf10 from '../img/abitur/uf/10.jpg';
// import uf11 from '../img/abitur/uf/11.jpg';
// import uf12 from '../img/abitur/uf/12.jpg';
// import uf13 from '../img/abitur/uf/13.jpg';
// import uf14 from '../img/abitur/uf/14.jpg';

const images = [
  // ab1,
  // ab2,
  // ffl1,
  // ffl2,
  // ffl3,
  // ffl4,
  // ffl5,
  // ffl6,
  // ffl7,
  // ffl8,
  // fius1,
  // fius2,
  // fius3,
  // fius4,
  // fius5,
  // fius6,
  // fius7,
  // fius8,
  // fius9,
  // fius10,
  // fius11,
  // fius12,
  // fius13,
  // fius14,
  // fius15,
  // fius16,
  // fius17,
  // fius18,
  fmfh1,
  fmfh2,
  fmfh3,
  fmfh4,
  fmfh5,
  fmfh6,
  fmfh7,
  fmfh8,
  // pf1,
  // pf2,
  // pf3,
  // pf4,
  // pf5,
  // pf6,
  // pf7,
  // pf8,
  // pf9,
  // pf10,
  // pf11,
  // pf12,
  // pf13,
  // spf1,
  // spf2,
  // spf3,
  // spf4,
  // spf5,
  // spf6,
  // spf7,
  // spf8,
  // spf9,
  // spf10,
  // tf1,
  // tf2,
  // tf3,
  // tf4,
  // tf5,
  // tf6,
  // tf7,
  // tf8,
  // tf9,
  // tf10,
  // tf11,
  // tf12,
  // ffkis1,
  // ffkis2,
  // ffkis3,
  // ffkis4,
  // ffkis5,
  // ffkis6,
  // ffkis7,
  // ff1,
  // ff2,
  // ff3,
  // ff4,
  // ff5,
  // ff6,
  // ff7,
  // ff8,
  // ef1,
  // ef2,
  // ef3,
  // ef4,
  // ef5,
  // ef6,
  // ef7,
  // uf1,
  // uf2,
  // uf3,
  // uf4,
  // uf5,
  // uf6,
  // uf7,
  // uf8,
  // uf9,
  // uf10,
  // uf11,
  // uf12,
  // uf13,
  // uf14,
];

export function Abitur() {
  return (
    <div className="main-page">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`abitur${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
