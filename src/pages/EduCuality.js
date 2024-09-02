// import React from 'react';
// import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import educuality1 from '../img/EduCuality/1.jpg';
// import educuality2 from '../img/EduCuality/2.jpg';
// import educuality3 from '../img/EduCuality/3.jpg';
// import educuality4 from '../img/EduCuality/4.jpg';
// import educuality5 from '../img/EduCuality/5.jpg';
// import educuality6 from '../img/EduCuality/6.jpg';
// import educuality7 from '../img/EduCuality/7.jpg';

// const images = [
//   educuality1,
//   educuality2,
//   educuality3,
//   educuality4,
//   educuality5,
//   educuality6,
//   educuality7,
// ];

// export function EduCuality() {
//   return (
//     <div className='main-page'>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, A11y]}
//         loop={true}
//         slidesPerView={1}
//         speed={1000}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         spaceBetween={30}
//         navigation={true}
//         pagination={{
//           type: 'fraction',
//         }}
//       >
//         {images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <img src={img} alt={`educuality${i + 1}`} className='slide' />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React from "react";

export function EduCuality() {
  return (
    <div className="main-page main-container structur">В разработке ...</div>
  );
}
