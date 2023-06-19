import OfferCard from "../Cards/OfferCard/OfferCard";
import Carousel from "../Carousel";
import { IHeroSectionProps, IHeroSectionPropsData } from "./types";

const pagination = {
  clickable: true,
};

const HeroSection = ({ carouselData, offerCardData }: IHeroSectionProps) => {
  const content = carouselData.map((items: IHeroSectionPropsData, index: number) => (
    <div className={` h-full flex items-center relative `} key={index}>
      <img src={items.image} alt="" className=" h-full " />
      <div className="ml-10 w-[60%] sm:w-[40%] text-left absolute">
        <p className="text-secondary lg:font-bold text-sm lg:text-base mb-2 lg:mb-5">{items.offer}</p>
        <h1 className="font-semibold lg:font-bold text-2xl leading-1 mb-1 lg:mb-3">{items.title}</h1>
        <p className="text-yellow-500 lg:font-bold text-sm lg:text-base mb-2 lg:mb-5">{items.price}</p>
        <div className="mt-5">
          <a href={items.buttonUrl} className="text-white bg-secondary border border-secondary hover:bg-white text-md  px-5 py-3 ">
            Shop now
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-6x mx-auto my-14 lg:grid grid-cols-5 space-y-4 lg:space-y-0 text-center gap-7">
      <div className="col-span-3 h-full">
        <Carousel slides={content} slidesPerView={1} className="h-full" pagination={pagination} navigation={false} />
      </div>
      <div className="col-span-2 md:grid grid-cols-2 lg:grid-cols-1 gap-5 space-y-5 md:space-y-0 ">
        {offerCardData.map((data, index) => (
          <OfferCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
