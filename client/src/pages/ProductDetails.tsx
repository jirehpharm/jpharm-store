import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";
import Categories from "../components/Products/Categories";
import RelatedProducts from "../components/Products/RelatedProducts";
import { listData } from "../components/products/constant";
import TopRatedProductCard from "../components/Products/TopRatedProductCard";
import WidgetLayout from "../components/Products/WidgetLayout";
import { topRated } from "../components/Products/TopRatedProductCard/constants";
import PopularTags from "../components/Common/PopularTags/PopularTags";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/SaleWidgetCard";
import { popularTags } from "../components/Common/PopularTags/const";
import ProductTab from "../components/Products/ProductTab";

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-6xl my-20">
        <div className="col-span-4">
          <Details />
          <ProductTab />
        </div>
        <div className="col-span-2">
          <Categories title={"Product Categories"} list={listData} />
          <WidgetLayout title={"Top Rated Products"}>
            <TopRatedProductCard productData={topRated} />
          </WidgetLayout>
          <WidgetLayout title="Popular Tags">
            <PopularTags tags={popularTags} />
          </WidgetLayout>
          <SaleWidgetCard
            title={"sanitizer"}
            description={"Save 20% on Sanitizer"}
            BuyNowLink={"#"}
            imgSrc={"img/saleWidget/banner-2.jpg"}
            imgAlt={"#"}
          />
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}
