import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style/index.css';

export default function HeroSlider() {
  return (
    <div className="hero-swiper">
      <Swiper slidesPerView={1}>
        <SwiperSlide className="slide slide-1">Slide 1</SwiperSlide>
        <SwiperSlide className="slide slide-2">Slide 2</SwiperSlide>
        <SwiperSlide className="slide slide-3">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}
