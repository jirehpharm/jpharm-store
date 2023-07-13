import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";
import RelatedProducts from "../components/Products/RelatedProducts";

import HorizontalTab from "../components/Tabs/HorizontalTab";
import { tabsData } from "../components/Tabs/constants";

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="flex flex-col gap-5 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl  mx-auto xl:max-w-6xl my-10 md:my-20">
        <Details />
      </div>
      <div className="bg-[#F2F5F7]">
        <div className="mx-auto max-w-6xl pt-14 pb-24">
          <HorizontalTab tabsData={tabsData} />
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}
