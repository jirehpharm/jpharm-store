import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Stats from "../components/Common/Stats";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProduct />
      <BestSeller />
      <OfferBanner />
      <Banner />
      <Stats />
    </div>
  );
}
