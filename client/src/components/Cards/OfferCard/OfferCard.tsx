import { IOfferCardProps } from "./types";

export default function OfferCard({ data }: { data: IOfferCardProps[] }) {
  return (
    <div className="pb-20 max-w-6xl mx-auto grid grid-cols-3 gap-5">
      {data.map((item, index) => (
        <div className="relative ">
          <>
            <div key={index} className="">
              <img
                src={item.imageSrc}
                alt="OfferCard"
                className="h-auto max-w-full"
              />
            </div>
            <div className="absolute top-8 left-8 p-5">
              <h4 className="">
                <a
                  href={item.shopLink}
                  className="text-primary block text-md pb-2 hover:text-secondary "
                >
                  {item.description1} <br /> {item.description2}
                </a>
                <a href={item.shopNowLink} className="text-light text-md block">
                  Shop Now
                </a>
              </h4>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
