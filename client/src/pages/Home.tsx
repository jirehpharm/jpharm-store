import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Carousel from "../components/Carousel";
import Stats from "../components/Common/Stats";
import HeroSection from "../components/Home/HeroSection";
import { IHeroProps } from "../components/Home/types";
import Category from "../components/Cards/Category/Category";
import { categoryData } from "../components/Cards/Category/content";

export default function Home() {
  const data: IHeroProps = {
    offer: "Up To 50% Off Today Only!",
    title: "Gold Standard Pre-Workout",
    price: "Starting at &16.99",
    buttonUrl: "#",
  };
  const slideData = categoryData.map((item, idx: number) => (
    <Category key={idx} Icon={item.Icon} title={item.title} />
  ))

  return (
    <div>
      <HeroSection
        offer={data.offer}
        title={data.title}
        price={data.price}
        buttonUrl={data.buttonUrl}
      />
      <FeaturedProduct />
      <BestSeller />
      <Carousel slidesPreview={7} slides={slideData} />
      {/* TODO: Need to Find a way to fetch the Banner Information */}
      <OfferBanner
        offerEndDate="2023-06-20"
        image=""
        title="Todays Hot Offer"
        subtitle1="Free Covid-19 Vaccine"
        subtitle2="Campaign Ticket"
        description1="Cur tantas regiones barbarorum obiit, tot maria transmist"
        description2="summo bono fruitur id est voluptate barbarorum"
      />
      <Banner />
      <Stats />
    </div>
  );
}
