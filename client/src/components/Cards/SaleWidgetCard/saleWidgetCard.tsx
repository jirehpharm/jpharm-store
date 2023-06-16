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
        <div className=" pt-16 pr-7 pb-10 pl-9 p-0 bg-[#e3efed] border-0">
          <div className="">
            <div className="uppercase text-secondary text-xs font-medium">
              {saleWidgetCard.title}
            </div>
            <h2>{saleWidgetCard.description}</h2>
            <a
              href={saleWidgetCard.buyNowLink}
              className="bg-[#e3efed] flex items-center font-medium hover:text-primar "
            >
              Buy Now
              <BsFillArrowRightCircleFill className="my-auto pl-1" size={20} />
            </a>
          </div>
          <img
            src={saleWidgetCard.imgSrc}
            alt={saleWidgetCard.imgAlt}
            className="pl-20"
          />
        </div>
      </a>
    </section>
  );
}
