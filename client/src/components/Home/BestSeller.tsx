import { Key } from "react";
import { JSX } from "react/jsx-runtime";
import ProductOverViewCard from "../Cards/ProductOverViewCard";
import { IProductProps } from "./types";

interface IBestSeller {
  data: IProductProps[];
}

export default function BestSeller(props: IBestSeller) {
  const { data } = props;
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Best Selling Item</h1>
        <div className="grid grid-cols-4 gap-5 ">
          {data?.map(
            (
              item: JSX.IntrinsicAttributes & IProductProps,
              index: Key | null | undefined
            ) => (
              <ProductOverViewCard
                isTextCenter={false}
                {...item}
                showStars={true}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
