import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import ProductsGrid from "../components/products/ProductsGrid";

export default function Products() {
  return (
    <div>
      <BreadcrumbBanner title={"Antiseptic Spray"} bgImage={"https://themexriver.com/wp/vicodin/wp-content/themes/vicodin/assets/images/bg/14.jpg"} />
      <div className="grid grid-cols-6 gap-5 max-w-6xl mx-auto">
        <div className="col-span-4">
          <ProductsGrid />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
