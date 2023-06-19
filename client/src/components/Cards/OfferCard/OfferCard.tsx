import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { IOfferCardProps } from "./types";

export default function OfferCard({ data }: { data: IOfferCardProps }) {
  return (
    <div className="relative ">
      <>
        <div className="">
          <img src={data.imageSrc} alt="OfferCard" className="h-auto max-w-full" />
        </div>
        <div className={`absolute ${data.contentRight ? "right-8 text-right" : "left-8 text-left"} top-8 p-5 w-[60%] `}>
          <h4 className={` ${data.contentRight ? `flex justify-end flex-col text-right ` : `text-left`}`}>
            <a href={data.shopLink} className="text-primary block text-md pb-2 hover:text-secondary ">
              {data.description}
            </a>
          </h4>
          {data.price && <p className="text-xs text-orange-400 font-nunito">{data.price}</p>}
          <a href={data.shopNowLink} className="text-white bg-secondary border border-secondary hover:text-white text-md  px-5 py-3">
            Shop Now <ArrowRightIcon className="w-5 h-5 inline" />
          </a>
        </div>
      </>
    </div>
  );
}
