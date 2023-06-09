import { Swiper as Carousel, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper";

interface ICarousel {
  slidesPreview: number,
  slides: object[]
}

export default function index(props: ICarousel) {
  const { slidesPreview, slides } = props;
  return (
    <div className="mx-32 relative">
      <Carousel
        className=" bg-blue-200"
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
          slides.map((item:any, idx: number) => (
            <SwiperSlide key={idx}>{item}</SwiperSlide>
          ))
        }
      </Carousel>
    </div>

  );
}
