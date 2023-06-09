import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Carousel from "../components/Carousel";
import Stats from "../components/Common/Stats";

export default function Home() {
  return (
    <div>
      <Carousel />
      <FeaturedProduct />
      <BestSeller />
      <OfferBanner />
      <Banner />
      <Stats />
    </div>
  );
}
