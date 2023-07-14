import Counter from "./Counter";
import Button from "../../Common/Button";
import getStars from "../../getStars";
import { productPreview } from "../constant";
import Carousel from "../../Carousel";
import { IProductPreviewProps } from "./types";
import { get } from "lodash";
import { useEffect, useLayoutEffect, useState } from "react";

const content = productPreview?.map(
  (item: IProductPreviewProps, index: number) => (
    <div key={index} className="relative p-2">
      <img src={item.imgSrc} alt="image" className="h-20 w-20" />
    </div>
  )
);
export default function Detail() {
  const [screensize, setScreensize] = useState(window.innerWidth);
  const [cardNo, setCardNo] = useState<any>(7);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setScreensize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screensize < 640) {
      setCardNo(3);
    } else if (screensize >= 640 && screensize < 770) {
      setCardNo(3);
    } else if (screensize >= 770 && screensize < 1024) {
      setCardNo(4);
    } else if (screensize >= 1024 && screensize < 1280) {
      setCardNo(4);
    } else if (screensize > 1280) {
      setCardNo(4);
    }
  }, [screensize]);

  const image = get(productPreview, "0.imgSrc", "");
  return (
    <div className="md:grid grid-cols-2 gap-4 lg:pr-4">
      <div className="px-5">
        <img src={image} alt="600x701" />
        <Carousel slidesPerView={cardNo} slides={content} />
      </div>
      <div className="mt-9 px-3">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-2xl">Hand Sanitizer</h2>
            <div className="flex items-center text-xs lg:text-lg">
              {getStars({ stars: 4 || 0 })}
              <div className="ml-4 text-gray-400 font-medium text-xs lg:text-sm">{`(1)`}</div>
            </div>
          </div>
          <div className="flex flex-col items-end space-x-4 pb-4">
            <p className="text-secondary font-bold text-3xl md:text-2xl lg:text-2xl mb-0">
              {" "}
              $32.00
            </p>
            <p className="text-secondary font-bold text-xl md:text-1xl lg:text-1xl line-through opacity-60 mb-0">
              $46.00
            </p>
          </div>
        </div>
        <p className="mt-4 mb-2">vbir vufhj uhofdhjvfhufhbjvfhujjkd d vbhosld sbfenk dvsbufedwndm vjfbfon dbfvbueonl dmvfhbv dmbshbend mbjshbfen dmfjvhebdb shfebdn smb bfnd nffhbfen </p>
        <Counter />
        <div className="flex py-2">
          <p className="mb-0 text-sm col-span-1 pr-2">Categories:</p>
          <h6 className="mb-0 text-sm text-light col-span-3">
            {`face-mask, ppe-kit, safety-suits`}
          </h6>
        </div>
        <div className="flex py-2">
          <p className="mb-0 text-sm col-span-1 pr-2">Tags:</p>
          <h6 className="mb-0 text-sm text-light col-span-3">
            {`Black, Brown, Red, Shoes, €0.00 - €150.00`}
          </h6>
        </div>
        {/* Add To Cart */}
        <div className="md:flex items-center justify-between md:space-x-4 pt-4">
          <Button className="md:flex items-center">
            ADD TO CART
          </Button>
          <Button className="md:flex items-center">
            ADD TO CART
          </Button>
        </div>
        <div className="my-4">
          <Button className="flex items-center w-full">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
