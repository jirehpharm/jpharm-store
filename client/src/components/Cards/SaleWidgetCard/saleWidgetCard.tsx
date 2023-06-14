import { BiRightArrowCircle } from "react-icons/bi";
import { ISaleWidgetCardProps } from "./types";

interface ISaleWidget {
  saleWidgetCard: ISaleWidgetCardProps[];
}

export default function SaleWidgetCard(props: ISaleWidget) {
  const { saleWidgetCard } = props;
  return (
    <section>
      <div className="mb-10 pt-8 pr-7 pb-10 pl-9 p-0 bg-[#e3efed] border-0">
        {saleWidgetCard.map((item, index) => (
          <>
            <div key={index} className="">
              <div className="uppercase text-secondary text-xs font-medium">
                {item.title}
              </div>
              <h2>{item.description}</h2>
              <a
                href={item.BuyNowLink}
                className="bg-[#e3efed] flex text-primary font-medium hover:text-primary"
              >
                Buy Now
                <BiRightArrowCircle
                  className="my-auto pl-1 text-primary"
                  size={20}
                />
              </a>
            </div>
            <img src={item.imgSrc} alt={item.imgAlt} className="pl-20" />
          </>
        ))}
      </div>
    </section>
  );
}
