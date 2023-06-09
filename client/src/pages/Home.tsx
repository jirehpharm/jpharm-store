import BestSeller from "../components/BestSeller";
import Banner from "../components/Home/Banner";
import OfferBanner from "../components/Home/OfferBanner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Stats from "../components/Common/Stats";

export default function Home() {
  return (
    <div>
      <FeaturedProduct />
      <BestSeller />

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
