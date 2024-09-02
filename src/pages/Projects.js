// import React from 'react';
// import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import proj1 from '../img/projects/1.jpg';
// import proj2 from '../img/projects/2.jpg';
// import proj3 from '../img/projects/3.jpg';
// import proj4 from '../img/projects/4.jpg';
// import proj5 from '../img/projects/5.jpg';
// import proj6 from '../img/projects/6.jpg';

// const images = [proj1, proj2, proj3, proj4, proj5, proj6];

// export function Projects() {
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
//             <img src={img} alt={`project${i + 1}`} className='slide' />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
import React from "react";

export function Projects() {
  return (
    <div className="main-page main-container structur">В разработке ...</div>
  );
}
