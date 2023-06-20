import ProductOverViewCard from "../Cards/ProductOverViewCard";
import SaleWidgetCard from "../Cards/SaleWidgetCard/saleWidgetCard";
import Heading from "../Common/Heading";
import { IProductProps } from "./types";
import { ISaleWidgetCardProps } from "../Cards/SaleWidgetCard/types";

export default function FeaturedProduct2({ data, featureProduct2 }: { data: IProductProps[]; featureProduct2: ISaleWidgetCardProps[] }) {
  return (
    <section>
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-14">
        <Heading title={"Featured Product"} />
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 ">
          <div className="grid grid-cols-2 gap-5 lg:flex flex-col justify-between mb-5 lg:mb-0">
            {featureProduct2?.map((item, index) => (
              <SaleWidgetCard saleWidgetCard={item} key={index} />
            ))}
          </div>
          <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-5 ">
            {data.map((item: IProductProps, index: number) => (
              <ProductOverViewCard isTextCenter={false} {...item} showStars={false} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
