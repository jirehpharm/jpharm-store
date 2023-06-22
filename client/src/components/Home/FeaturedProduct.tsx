import FeaturedProductCard from "../Cards/FeaturedProductCard";
import { featuredProductsData } from "./constants";
import { IFeaturedProductProps } from "./types";

export default function FeaturedProduct() {
  return (
    <section className=" bg-sectionColor py-10 ">
      <div className="max-w-sm md:max-w-3xl lg:max-w-6xl mx-auto p-4">
        <h1 className="text-center text-2xl md:text-4xl">Featured Products</h1>
        <div className="my-14">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 ">
            {featuredProductsData.map(
              (product: IFeaturedProductProps, index: number) => (
                <div>
                  <FeaturedProductCard key={index} {...product} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
