import { TbPhoneCalling } from "react-icons/tb";
import { IPartnersProps } from "./types";

export interface IPartners {
  partnersData: IPartnersProps;
}

export default function Partners(props: IPartners) {
  const { partnersData } = props;

  return (
    <div className="mx-auto max-w-6xl mt-8 py-10 px-4 sm:px-20 xl:px-0 ">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <img
            src={partnersData?.image}
            alt="image"
            className="object-contain "
          />
        </div>
        <div>
          <h1 className="text-2xl leading-relaxed sm:text-3xl font-josefin xl:text-4xl">{partnersData?.title}</h1>
          <p className="text-light text-sm leading-6 md:text-base">{partnersData?.description}</p>
          <ul className="flex flex-col space-y-5">
            {partnersData?.list.map((item, idx) => (
              <li className="text-light text-base flex items-center" key={idx}>
                {item.icon && (
                  <item.icon className="text-secondary h-6 w-6 inline mr-3" />
                )}
                <span className="text-sm text-light w-[90%] md:text-base">{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="border-b border-borderColor my-8"></div>
          {partnersData?.name && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex space-x-4 items-center px-3 py-2 border-r">
                <img
                  src={partnersData?.authorImg}
                  alt="person"
                  className="rounded-full h-10 w-10"
                />
                <div>
                  <h6 className="mb-0 text-xl md:text-lg pb-1">{partnersData?.name}</h6>
                  <p className="mb-0 text-light md:text-sm">{partnersData?.field}</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center bg-borderColor px-4 py-2">
                <TbPhoneCalling className="h-6 w-6 text-secondary" />
                <div>
                  <p className="mb-0 text-light">Get Support</p>
                  <h6 className="mb-0">123-456-789-10</h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
