import Carousel from "../Carousel";
import { IHeroSectionProps, IHeroSectionPropsData } from "./types";

const pagination = {
  clickable: true,
};

const HeroSection = ({ carouselData }: IHeroSectionProps) => {
  const content = carouselData.map((items: IHeroSectionPropsData, index: number) => (
    <div className={` h-full flex items-center bg-[url(placeholder/1408x993.jpg)]`} key={index}>
      <div className="ml-10 w-[40%] text-left">
        <p className="text-secondary font-bold">{items.offer}</p>
        <h1 className="">{items.title}</h1>
        <p className="text-yellow-500 font-bold">{items.price}</p>
        <div>
          <a href={items.buttonUrl} className="btn">
            Shop now
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="max-w-6xl mx-auto my-14 grid grid-cols-5 text-center gap-7">
      <div className="col-span-3 h-full">
        <Carousel slides={content} slidesPerView={1} className="h-full" pagination={pagination} navigation={false} />
      </div>
      <div className="col-span-2 space-y-7">
        <div>
          <img src={"placeholder/872x465.jpg"} alt="Image" className="" />
        </div>
        <div>
          <img src={"placeholder/872x465.jpg"} alt="Image" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
