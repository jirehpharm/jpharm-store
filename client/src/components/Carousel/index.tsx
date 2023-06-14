import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ICarouselProps extends SwiperProps {
  slides: React.ReactNode[];
}

export default function Carousel(props: ICarouselProps, {}) {
  const { slidesPerView, slides = [], ...otherProps } = props;
  return (
    <div className="mx-auto max-w-6xl relative">
      <Swiper
        slidesPerView={slidesPerView}
        {...otherProps}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
      >
        {slides.map((item, idx: number) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
