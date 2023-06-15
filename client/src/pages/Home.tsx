import BestSeller from "../components/Home/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Carousel from "../components/Carousel";
import Stats from "../components/Common/Stats";
import HeroSection from "../components/Home/HeroSection";
import Category from "../components/Cards/Category/Category";
import { categoryData } from "../components/Cards/Category/content";
import TrendingBlog from "../components/Blog/TrendingBlog";
import {
  heroSectionData,
  offerSectionData,
  widgetsData,
} from "../components/Home/constants";
import TrendingProduct from "../components/Home/TrendingProduct";
import FeaturedProduct2 from "../components/Home/FeaturedProduct2";
import { blogDetails } from "../components/Blog/constant";

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
      <div className="mx-auto max-w-6xl">
        <Carousel slidesPerView={7} slides={slideData} />
      </div>
      <FeaturedProduct2 />
      <OfferBanner {...offerSectionData} />
      <TrendingProduct />
      <FeaturedProduct />
      <BestSeller />
      <Banner
        miniTitle={"N95 Facial Covering Mask"}
        title={"Grade A Safety Masks For Sale. Hurry Up! "}
        description={
          "Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"
        }
        widgets={widgetsData}
        link={"#"}
        bgImage={"/placeholder/1920x623.png"}
      />
      <TrendingBlog blogDetails={blogDetails} />
      <Stats />
    </div>
  );
}
