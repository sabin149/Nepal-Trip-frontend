import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Global.css";

// import required modules
import { Pagination, Navigation,Autoplay, EffectFlip } from "swiper";


export default function Carousel({images}) {
  return (
    <>
      <Swiper
      style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type:"fraction"
        }}
        navigation={true}
        modules={[EffectFlip,Pagination,Autoplay, Navigation]}
        className="mySwiper"
      >
        {
         images&& images?.map((image,index) => (
                <SwiperSlide key={index}>
                    <img src={image.url} alt="hotel" style={{width:720, height:550}} />
                </SwiperSlide>
            ))
        }

      </Swiper>
    </>
  );
}
