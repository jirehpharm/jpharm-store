import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";
import PopularTags from "../components/Common/PopularTags/PopularTags";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/SaleWidgetCard";
export default function ProductDeatils() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-6xl my-20">
        <div className="col-span-4">
          <Details />
        </div>
        <div className="col-span-2">
          <PopularTags />
          <SaleWidgetCard
            title={"sanitizer"}
            description={"Save 20% on Sanitizer"}
            BuyNowLink={"#"}
            imgSrc={"img/saleWidget/banner-2.jpg"}
            imgAlt={"#"}
          />
        </div>
      </div>
    </>
  );
}
