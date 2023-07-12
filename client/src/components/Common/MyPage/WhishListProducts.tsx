import Button from "../Button";
import { IWhishListProps } from "./types";

interface IWhishList {
  whishlist: IWhishListProps[];
}

export default function WhishListProducts(props: IWhishList) {
  const { whishlist } = props;
  return (
    <>
      <div className="mt-40 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="flex justify-center">
          <h3 className="text-primary text-base md:text-2xl">
            WhishList products
          </h3>
        </div>
        <div className="grid grid-cols-2 border-t-4 border-slate-500">
          {/* column 1 */}
          <div>
            <div className="bg-slate-300 border border-slate-200">
              <h5 className="py-3 mx-5 text-base text-center mb-0">Image</h5>
            </div>
            {whishlist?.map((item, index) => (
              <div key={index} className="border border-slate-200 h-24">
                <img src={item.image} className="w-[20%] h-full mx-auto p-1" />
              </div>
            ))}
          </div>
          <div>
            <div className="bg-slate-300 border border-slate-200">
              <h5 className="py-3 sm:mx-5 sm:flex text-base text-center mb-0">
                Product Name
              </h5>
            </div>
            {whishlist?.map((item, index) => (
              <div key={index} className="border border-slate-200 h-24">
                <h5 className="text-sm md:text-base text-center my-8">
                  {item.productName}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <Button className="mr-2">More product List</Button>
      </div>
    </>
  );
}
