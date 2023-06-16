import ProductOverViewCard from "../Cards/ProductOverViewCard";
import Carousel from "../Carousel";
import { IProductProps } from "./types";

interface ITrendingProduct {
  data: IProductProps[];
}

export default function TrendingProduct(props: ITrendingProduct) {
  const { data } = props;
  const content = data.map((item: IProductProps, index: number) => (
    <ProductOverViewCard
      isTextCenter={false}
      {...item}
      showStars={true}
      key={index}
    />
  ));
  return (
    <section>
      <div className="max-w-6xl mx-auto py-14">
        <h1 className="text-center mb-11 text-5xl">Trending Products</h1>
        <Carousel slidesPerView={4} spaceBetween={25} slides={content} />
      </div>
    </section>
  );
}
