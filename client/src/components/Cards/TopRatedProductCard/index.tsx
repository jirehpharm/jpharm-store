import getStars from "../../getStars";
import { ITopRatedCardData } from "./types";

interface ITopRatedProps {
  productData: ITopRatedCardData[]
}

export default function index(props: ITopRatedProps) {
  const { productData } = props;
  return (
    <>
      {
        productData?.map((item, idx) => (
          <div className="flex item-center mb-3" key={idx}>
            <div>
              <img src={item.image} className="w-[90px] h-[120px]" />
            </div>
            <div className="p-6">
              <div className="flex mb-2">{getStars({ stars: item.stars })}</div>
              <h6 className="my-1">{item.title}</h6>
              <span className="text-lg font-semibold text-secondary">{item.discountedPrice}</span>
              <del className="text-xs mx-2 text-secondary">{item.originalPrise}</del>
            </div>
          </div>
        ))
      }

    </>
  )
}
