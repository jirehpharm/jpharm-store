import { useEffect, useLayoutEffect, useState } from "react";
import ProductOverViewCard from "../Cards/ProductOverViewCard";
import Carousel from "../Carousel";
import Heading from "../Common/Heading";
import { IProductProps } from "./types";

interface ITrendingProduct {
  data: IProductProps[];
}

export default function TrendingProduct(props: ITrendingProduct) {
  const { data } = props;
  const [screensize, setScreensize] = useState(window.innerWidth);
  const [cardNo, setCardNo] = useState<any>(7);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setScreensize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screensize < 640) {
      setCardNo(2);
    } else if (screensize >= 640 && screensize < 770) {
      setCardNo(2);
    } else if (screensize >= 770 && screensize < 1024) {
      setCardNo(3);
    } else if (screensize >= 1024 && screensize < 1280) {
      setCardNo(3);
    } else if (screensize > 1280) {
      setCardNo(4);
    }
  }, [screensize]);
  const content = data.map((item: IProductProps, index: number) => (
    <ProductOverViewCard isTextCenter={false} {...item} showStars={true} key={index} />
  ));
  return (
    <section>
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-14">
        <Heading title={"Trending Product"} />
        <Carousel slidesPerView={cardNo} spaceBetween={25} slides={content} />
      </div>
    </section>
  );
}
