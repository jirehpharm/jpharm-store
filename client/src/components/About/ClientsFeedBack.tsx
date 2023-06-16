import TestimonialsCard, { ITestimonialsProps } from "../Cards/TestimonialsCard";
import Carousel from "../Carousel";

export default function ClientsFeedBack({ testimonialsData }: { testimonialsData: ITestimonialsProps[] }) {
  const carouselContent = testimonialsData.map((item: ITestimonialsProps, index: number) => <TestimonialsCard {...item} key={index} />);

  return (
    <section className="bg-sectionColor">
      <div className="max-w-6xl mx-auto py-20 ">
        <h1 className="text-center mb-4">Clients FeedBack</h1>
        <Carousel slides={carouselContent} slidesPerView={2} spaceBetween={20} />{" "}
      </div>
    </section>
  );
}
