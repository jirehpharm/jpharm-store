import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div>
      <FeaturedProduct />
      <BestSeller />
      <OfferBanner />
      <Banner />
      <Stats />
    </div>
  );
}
