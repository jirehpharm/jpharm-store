import { useEffect, useLayoutEffect, useState } from "react";
import TestimonialsCard, { ITestimonialsProps } from "../Cards/TestimonialsCard";
import Carousel from "../Carousel";

export default function ClientsFeedBack({ testimonialsData }: { testimonialsData: ITestimonialsProps[] }) {
  const carouselContent = testimonialsData.map((item: ITestimonialsProps, index: number) => <TestimonialsCard {...item} key={index} />);

  const [screensize, setScreensize] = useState(window.innerWidth);
  const [cardNo, setCardNo] = useState<any>(7);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setScreensize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screensize < 640) {
      setCardNo(1);
    } else if (screensize >= 640 && screensize < 770) {
      setCardNo(2);
    } else if (screensize >= 770 && screensize < 1024) {
      setCardNo(2);
    } else if (screensize >= 1024 && screensize < 1280) {
      setCardNo(2);
    } else if (screensize > 1280) {
      setCardNo(2);
    }
  }, [screensize]);

  return (
    <section className="bg-sectionColor">
      <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto py-20 ">
        <h1 className="text-center mb-4 text-2xl lg:text-4xl">Clients FeedBack</h1>
        <Carousel slides={carouselContent} slidesPerView={cardNo} spaceBetween={20} />{" "}
      </div>
    </section>
  );
}
