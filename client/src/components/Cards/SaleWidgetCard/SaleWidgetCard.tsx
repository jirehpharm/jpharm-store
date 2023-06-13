import { BiRightArrowCircle } from "react-icons/bi";
import { ISaleWidgetCardProps } from "./types";

export default function SaleWidgetCard({
  title,
  description,
  BuyNowLink,
  imgSrc,
  imgAlt,
}: ISaleWidgetCardProps) {
  return (
    <section>
      <div className="mb-10 pt-8 pr-7 pb-10 pl-9 p-0 bg-[#e3efed] border-0">
        <div className="">
          <div className="uppercase text-secondary text-xs font-medium">
            {title}
          </div>
          <h2>{description}</h2>
          <a
            href={BuyNowLink}
            className="bg-[#e3efed] flex text-primary font-medium hover:text-primary"
          >
            Buy Now
            <BiRightArrowCircle
              className="my-auto pl-1 text-primary"
              size={20}
            />
          </a>
        </div>
        <img src={imgSrc} alt={imgAlt} className="pl-20" />
      </div>
    </section>
  );
}
