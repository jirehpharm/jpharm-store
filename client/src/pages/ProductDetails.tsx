import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";
import Categories from "../components/Products/Categories";
import RelatedProducts from "../components/Products/RelatedProducts";

import HorizontalTab from "../components/Tabs/HorizontalTab";
import { listData } from "../components/Products/constant";
import TopRatedProductCard from "../components/Cards/TopRatedProductCard";
import WidgetLayout from "../components/Products/WidgetLayout";
import { topRated } from "../components/Cards/TopRatedProductCard/constants";
import PopularTags from "../components/Products/PopularTags/index";
import { popularTags } from "../components/Products/PopularTags/constants";
import { tabsData } from "../components/Tabs/constants";
import WriteInquiry from "../components/Products/ProductTab/WriteInquiry";

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="flex flex-col lg:grid grid-cols-6 gap-5 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl  mx-auto xl:max-w-6xl my-10 md:my-20">
        <div className="col-span-4">
          <Details />
          <HorizontalTab tabsData={tabsData} />
        </div>
        <div className="col-span-2 mx-2 sm:mx-0">
          <Categories title={"Product Categories"} list={listData} />
          <WidgetLayout title={"Top Rated Products"}>
            <TopRatedProductCard productData={topRated} />
          </WidgetLayout>
          <WidgetLayout title="Popular Tags">
            <PopularTags tags={popularTags} />
          </WidgetLayout>
        </div>
      </div>
      <RelatedProducts />
      <WriteInquiry />
    </>
  );
}
