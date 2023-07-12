import { useEffect, useLayoutEffect, useState } from "react";
import ProductOverViewCard from "../../Cards/ProductOverViewCard";
import Carousel from "../../Carousel";
import { featuredProductDetails } from "../constant";
import { IFeaturedProductProps } from "./types";

export default function index() {
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

  const content = featuredProductDetails.map((item: IFeaturedProductProps, index: number) => <ProductOverViewCard {...item} key={index} />);

  return (
    <section className="pt-10 pb-[70px] mx-auto max-w-6xl">
      <div className="relative px-4">
        <div className="relative mb-12">
          <h1 className="flex justify-center mb-10">Related Products</h1>
          <Carousel slidesPerView={cardNo} spaceBetween={30} slides={content} />
        </div>
      </div>
    </section>
  );
}
