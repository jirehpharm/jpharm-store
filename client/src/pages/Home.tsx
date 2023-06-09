import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Stats from "../components/Common/Stats";
import HeroSection from "../components/Home/HeroSection";
import { IHeroProps } from "../components/Home/types";

export default function Home() {
  const data: IHeroProps = {
    offer: "Up To 50% Off Today Only!",
    title: "Gold Standard Pre-Workout",
    price: "Starting at &16.99",
    buttonUrl: "#",
  };

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
      <OfferBanner />
      <Banner />
      <Stats />
    </div>
  );
}
