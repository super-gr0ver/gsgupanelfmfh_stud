// import React from 'react';
// import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import tech1 from '../img/tech/1.jpg';
// import tech2 from '../img/tech/2.jpg';

// const images = [tech1, tech2];

// export function Tech() {
//   return (
//     <div className='main-page'>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, A11y]}
//         loop={true}
//         slidesPerView={1}
//         speed={1000}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: true,
//         }}
//         spaceBetween={30}
//         navigation={true}
//         pagination={{
//           type: 'fraction',
//         }}
//       >
//         {images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <img src={img} alt={`tech${i + 1}`} className='slide' />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React from "react";

export function Tech() {
  return (
    <div className="main-page main-container structur">В разработке ...</div>
  );
}
