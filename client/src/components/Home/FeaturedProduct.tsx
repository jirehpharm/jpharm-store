import FeaturedProductCard from "../Cards/FeaturedProductCard";
import { featuredProductsData } from "./constants";
import { IFeaturedProductProps } from "./types";

export default function FeaturedProduct() {
  return (
    <section className=" bg-sectionColor py-20">
      <h1 className="text-center">Featured Products</h1>
      <div className="max-w-7xl mx-auto my-14">
        <div className="grid grid-cols-3 gap-10 ">
          {featuredProductsData.map(
            (product: IFeaturedProductProps, index: number) => (
              <FeaturedProductCard key={index} {...product} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
