import { ISaleWidgetCardProps } from "./types";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function SaleWidgetCard({
  saleWidgetCard,
}: {
  saleWidgetCard: ISaleWidgetCardProps;
}) {
  return (
    <section>
      <a href={saleWidgetCard.buyNowLink}>
        <div className="pt-16 pr-7 pb-10 pl-9 p-0 max-w-xs sm:max-w-xl md:mx-auto bg-[#e3efed] border-0">
          <div className="">
            <div className="uppercase text-secondary text-xs font-medium font-nunito">
              {saleWidgetCard.title}
            </div>
            <h2 className="font-josefin text-xl md:text-[22px] lg:text-2xl pt-2 mb-0">
              {saleWidgetCard.description}
            </h2>
            <a
              href={saleWidgetCard.buyNowLink}
              className="bg-[#e3efed] flex items-center font-medium font-josefin text-sm  hover:text-primary"
            >
              Buy Now
              <BsFillArrowRightCircleFill className="my-auto pl-1" size={20} />
            </a>
          </div>
          <img
            src={saleWidgetCard.imgSrc}
            alt={saleWidgetCard.imgAlt}
            className="lg:pl-20 "
          />
        </div>
      </a>
    </section>
  );
}
