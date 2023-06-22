import getStars from "../../getStars";
import { ITopRatedCardData } from "./types";

interface ITopRatedProps {
  productData: ITopRatedCardData[];
}

export default function index(props: ITopRatedProps) {
  const { productData } = props;
  return (
    <>
      {productData?.map((item, idx) => (
        <div className="flex item-center mb-3" key={idx}>
          <a href="#">
            <div>
              <img src={item.image} className="w-[90px] h-[120px]" />
            </div>
          </a>
          <div className="p-6">
            <div className="flex mb-2 sm:text-sm">
              {getStars({ stars: item.stars })}
            </div>
            <a href="#">
              <h6 className="my-1 text-sm md:text-">{item.title}</h6>
            </a>
            <span className="text-sm lg:text-lg font-semibold  text-secondary">
              {item.discountedPrice}
            </span>
            <del className="text-xs mx-2 text-secondary">
              {item.originalPrise}
            </del>
          </div>
        </div>
      ))}
    </>
  );
}
