
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

export default function ShowSwiper() {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          centeredSlides={false}
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
        >
          <SwiperSlide>
            <img
              src="public/pexels-kunal-lakhotia-781256899-37485309.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/pexels-marcio-norris-1880733-3488259.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/pexels-mlkbnl-7419521.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="public/pexels-amine-photographe-291182746-20858950.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/pexels-marcio-norris-1880733-3488259.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="public/pexels-marcio-norris-1880733-3488259.jpg" alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}