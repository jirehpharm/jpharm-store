import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Carousel from "../components/Carousel";
import Stats from "../components/Common/Stats";
import Category from "../components/Cards/Category/Category";
import { categoryData } from "../components/Cards/Category/content";

export default function Home() {

  const SlidesData = categoryData.map((item: any, idx: number) => (
    <Category key={idx} Icon={item.Icon} title={item.title} />
  ))

  return (
    <div>
      <Carousel slidesPreview={7} slides={SlidesData} />
      <FeaturedProduct />
      <BestSeller />
      <OfferBanner />
      <Banner />
      <Stats />
    </div>
  );
}
