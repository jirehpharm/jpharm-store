import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ICarouselProps {
  slidesPreview: number,
  slides: React.ReactNode[]
}

export default function Carousel({ slidesPreview, slides = [] }: ICarouselProps) {
  return (
    <div className="mx-32 relative">
      <Swiper
        slidesPerView={slidesPreview}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}

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
