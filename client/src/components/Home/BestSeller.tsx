import { JSX } from "react/jsx-runtime";
import ProductOverViewCard from "../Cards/ProductOverViewCard";
import Heading from "../Common/Heading";
import { IProductProps } from "./types";

export default function BestSeller({ data }: { data: IProductProps[] }) {
  return (
    <section>
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-14">
        <Heading title={"Best Selling Item"} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {data?.map((item: JSX.IntrinsicAttributes & IProductProps, index: number) => (
            <ProductOverViewCard isTextCenter={false} {...item} showStars={true} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
