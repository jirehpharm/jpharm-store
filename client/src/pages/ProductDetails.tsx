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

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="lg:grid grid-cols-6 gap-5 mx-auto lg:max-w-4xl xl:max-w-6xl sm:max-w-lg max-w-sm md:max-w-2xl my-20">
        <div className="col-span-4">
          <Details />
          <HorizontalTab tabsData={tabsData} />
        </div>
        <div className="col-span-2">
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
    </>
  );
}
