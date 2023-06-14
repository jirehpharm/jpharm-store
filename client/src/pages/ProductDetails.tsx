import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/ProductsComponents/Details";
import Categories from "../components/ProductsComponents/Categories";
import RelatedProducts from "../components/ProductsComponents/RelatedProducts";
import ProductTab from "../components/ProductsComponents/ProductTab";
import { listData } from "../components/ProductsComponents/constant";
import TopRatedProductCard from "../components/Cards/TopRatedProductCard";
import WidgetLayout from "../components/ProductsComponents/WidgetLayout";
import { topRated } from "../components/Cards/TopRatedProductCard/constants";
import PopularTags from "../components/ProductsComponents/PopularTags/index";
import { popularTags } from "../components/ProductsComponents/PopularTags/constants";
import SaleWidgetCard from "../components/Cards/SaleWidgetCard/saleWidgetCard";
import { salesWidgetCard } from "../components/Cards/SaleWidgetCard/constants";

export default function ProductDetails() {
  return (
    <>
      <BreadcrumbBanner title={"Antiseptic Spray"} />
      <div className="grid grid-cols-6 gap-5 mx-auto max-w-6xl my-20">
        <div className="col-span-4">
          <Details />
          <ProductTab />
          <RelatedProducts />
        </div>
        <div className="col-span-2">
          <Categories title={"Product Categories"} list={listData} />
          <WidgetLayout title={"Top Rated Products"}>
            <TopRatedProductCard productData={topRated} />
          </WidgetLayout>
          <WidgetLayout title="Popular Tags">
            <PopularTags tags={popularTags} />
          </WidgetLayout>
          <SaleWidgetCard saleWidgetCard={[salesWidgetCard]} />
        </div>
      </div>
    </>
  );
}
