import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ICarouselProps {
  slidesPreview: number,
  slides: React.ReactNode[]
}

export default function Carousel({ slidesPreview, slides = [] }: ICarouselProps) {
  return (
    <div className="mx-auto max-w-6xl relative">
      <Swiper
        slidesPerView={slidesPreview}
        spaceBetween={0}
        loop={false}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}

      >
        {
          slides.map((item, idx: number) => (
            <SwiperSlide key={idx}>{item}</SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  );
}
