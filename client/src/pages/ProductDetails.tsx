import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Details from "../components/Products/Details";
import RelatedProducts from "../components/Products/RelatedProducts";
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
        <div className="col-span-2">sidebar</div>
      </div>
      <RelatedProducts />
    </>
  );
}
