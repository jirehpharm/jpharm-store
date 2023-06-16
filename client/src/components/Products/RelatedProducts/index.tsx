import ProductOverViewCard from "../../Cards/ProductOverViewCard";
import Carousel from "../../Carousel";
import { featuredProductDetails } from "../constant";
import { IFeaturedProductProps } from "./types";

export default function index() {

  const content = featuredProductDetails.map((item: IFeaturedProductProps, index: number) => (
    <ProductOverViewCard {...item} key={index} />
  ));

  return (
    <section className="pt-10 pb-[70px] mx-auto max-w-6xl">
      <div className="relative px-4">
        <div className="relative mb-12">
          <h4 className="border-l-2 border-secondary pl-3 mb-10" >Related Products</h4>
          <Carousel slidesPerView={4} spaceBetween={30} slides={content} />
        </div>
      </div>
    </section>
  );
}
