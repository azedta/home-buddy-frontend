// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';
// import 'swiper/css/autoplay';

// // Import Swiper styles
// import 'swiper/css';
// import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
// import { bannerLists } from '../../utils';

// const HeroBanner = () => {
//     return (
//         <div className='py-2 rounded-md'>
//             <Swiper
//                 grabCursor={true}
//                 autoplay={{
//                     delay: 4000,
//                     disableOnInteraction: false,
//                 }}
//                 navigation
//                 modules={[Pagination, EffectFade, Navigation, Autoplay]}
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 slidesPerView={1}>

//                     {bannerLists.map((item,i) => (
//                         <SwiperSlide>
//                             <div className=''></div>
//                         </SwiperSlide>
//                     ))}

//             </Swiper>
//         </div>
//     );
// }