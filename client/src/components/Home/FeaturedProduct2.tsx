import ProductOverViewCard from "../Cards/ProductOverViewCard";
import { IProductProps } from "./types";

interface IFeatureProduct2 {
  data: IProductProps[];
}

const promationsimages = [
  { image: "placeholder/540x688.jpg", link: "#" },
  { image: "placeholder/540x884.jpg", link: "#" },
];

export default function FeaturedProduct2(props: IFeatureProduct2) {
  const { data } = props;
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Featured Product</h1>
        <div className="grid grid-cols-4 gap-5 ">
          <div className="flex flex-col justify-between">
            {promationsimages.map(
              (item: { image: string; link: string }, index: number) => (
                <div>
                  <a href={item.link} key={index}>
                    <img src={item.image} alt="error" />
                  </a>
                </div>
              )
            )}
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
