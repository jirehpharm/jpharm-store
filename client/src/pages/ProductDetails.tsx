import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/products/Details";
import Categories from "../components/products/Categories";
import RelatedProducts from "../components/products/RelatedProducts";
import { listData } from "../components/products/constant";
import TopRatedProductCard from "../components/Cards/TopRatedProductCard";
import WidgetLayout from "../components/products/WidgetLayout";
import { topRated } from "../components/Cards/TopRatedProductCard/constants";

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-6xl my-20">
        <div className="col-span-4">
          <Details />
        </div>
        <div className="col-span-2">
          <Categories title={"Product Categories"} list={listData} />
          <WidgetLayout title={"Top Rated Products"}>
            <TopRatedProductCard productData={topRated} />
          </WidgetLayout>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
}
