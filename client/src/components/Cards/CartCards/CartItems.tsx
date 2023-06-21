import { FaTimes } from "react-icons/fa";

import { IViewCartCardProps } from "../../Common/CartDrawer/types";

interface IViewCartCard {
  product: IViewCartCardProps[];
}

export default function CartItems(props: IViewCartCard) {
  const { product } = props;
  return (
    <section className="overflow-y-auto scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-md scrollbar-thumb-gray-200 max-h-80">
      {product?.map((item, index) => (
        <div className="">
          <div className="py-5 pl-2 d-block clear-both shadow">
            <div key={index} className="flex items-center">
              <div className="showdow-sm float-left w-20 relative ml-4">
                <>
                  <a href={item.productLink}>
                    <img src={item.imageSrc} alt={item.imageAlt} />
                  </a>
                  <span className="absolute h-5 w-5 block leading-5 bg-white text-center cursor-pointer rounded-full -right-2 -top-2 p-1 hover:text-red-500">
                    <FaTimes className="text-primary" size={15} />
                  </span>
                </>
              </div>
              <div className="p-5 pt-0 mr-10">
                <h6 className="font-josefin mb-1 font-medium text-sm lg:text-base">
                  <a href="#">{item.productName}</a>
                </h6>
                <span className="text-light text-sm lg:text-base">
                  {item.productQuantity} x ${item.amount}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
