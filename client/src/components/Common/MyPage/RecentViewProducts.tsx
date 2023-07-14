import { IRecentlyViewedProps } from "./types";

export default function RecentViewProducts(props: {
  IRecentlyViewed: IRecentlyViewedProps[];
}) {
  const recentlyViewed = props.IRecentlyViewed;
  return (
    <>
      <div className="mt-40 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex justify-center">
          <h3 className="text-primary text-base lg:text-2xl mb-6 not-italic font-bold leading-[26px]">
            WhishList products
          </h3>
        </div>
        <div className="grid grid-cols-2 border-t-[3px] border-t-black border-solid border-[#E0E0E0]">
          {/* column 1 */}
          <div>
            <div className="bg-[#EDECEC] border border-[#E0E0E0] ">
              <h5 className="py-3 mx-5 text-sm sm:text-base md:text-lg text-center mb-0 font-bold leading-[26px]">
                Image
              </h5>
            </div>
            {recentlyViewed?.map((item, index) => (
              <div key={index} className="border border-[#E0E0E0] h-24">
                <img src={item.image} className="w-[20%] h-full mx-auto p-1" />
              </div>
            ))}
          </div>
          <div>
            <div className="bg-[#EDECEC] border border-[#E0E0E0]">
              <h5 className="py-3 sm:mx-5 text-sm sm:text-base md:text-lg text-center mb-0 font-bold leading-[26px]">
                Product Name
              </h5>
            </div>
            {recentlyViewed?.map((item, index) => (
              <div key={index} className="border border-[#E0E0E0] h-24">
                <h5 className="text-sm md:text-base font-bold leading-normal text-center my-8">
                  {item.productName}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 mb-48">
        <div className="">
          <a href="#">
            <div className="text-[#46CEB6] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto border border-solid border-[#46CEB6] rounded-[5px] ml-1">
              More of Recent View Product List
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
