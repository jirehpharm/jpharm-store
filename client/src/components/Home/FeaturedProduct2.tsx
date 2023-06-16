import ProductOverViewCard from "../Cards/ProductOverViewCard";
import SaleWidgetCard from "../Cards/SaleWidgetCard/saleWidgetCard";
import { IProductProps } from "./types";
import { ISaleWidgetCardProps } from "../Cards/SaleWidgetCard/types";

export default function FeaturedProduct2({
  data,
  featureProduct2,
}: {
  data: IProductProps[];
  featureProduct2: ISaleWidgetCardProps[];
}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Featured Product</h1>
        <div className="grid grid-cols-4 gap-5 ">
          <div className="flex flex-col justify-between">
            {featureProduct2?.map((item, index) => (
              <SaleWidgetCard saleWidgetCard={item} key={index} />
            ))}
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-5 ">
            {data.map((item: IProductProps, index: number) => (
              <ProductOverViewCard
                isTextCenter={false}
                {...item}
                showStars={false}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
