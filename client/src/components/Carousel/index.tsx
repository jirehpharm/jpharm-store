import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ICarouselProps extends SwiperProps {
  slides: React.ReactNode[];
}

export default function Carousel(props: ICarouselProps, {}) {
  const { slidesPerView, slides = [], ...otherProps } = props;
  return (
    <Swiper
      slidesPerView={slidesPerView}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      {...otherProps}
      modules={[Keyboard, Navigation, Pagination]}
    >
      {slides.map((item, idx: number) => (
        <SwiperSlide key={idx}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
