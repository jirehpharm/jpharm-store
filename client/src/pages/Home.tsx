import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Carousel from "../components/Carousel";
import Stats from "../components/Common/Stats";
import HeroSection from "../components/Home/HeroSection";
import Category from "../components/Cards/Category/Category";
import { categoryData } from "../components/Cards/Category/content";
import {
  heroSectionData,
  offerSectionData,
} from "../components/Home/constants";
import TrendingBlog from "../components/Blog/TrendingBlog";

export default function Home() {
  const slideData = categoryData.map((item, idx: number) => (
    <Category key={idx} Icon={item.Icon} title={item.title} />
  ));

  {
    /* TODO: Need to Find a way to fetch the data from the server */
  }
  return (
    <div>
      <HeroSection {...heroSectionData} />
      <FeaturedProduct />
      <BestSeller />
      <Carousel slidesPreview={7} slides={slideData} />
      <OfferBanner {...offerSectionData} />
      <Banner />
      <TrendingBlog />

      <Stats />
    </div>
  );
}
