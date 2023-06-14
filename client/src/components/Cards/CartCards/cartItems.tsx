import { FaTimes } from "react-icons/fa";

import { IViewCartDrawer } from "../../Common/CartDrawer/types";

export default function cartItems({
  productName,
  productLink,
  productImageSrc,
  productImageAltText,
  amount,
  productQuantity,
}: IViewCartDrawer) {
  return (
    <section className="shadow ">
      <div className="max-h-[calc(100%_-_(60px_+_245px))] overflow-y-auto">
        <div className="py-5 pl-2 d-block clear-both">
          <div className="flex items-center">
            <div className="float-left w-20 relative ml-[15px]">
              <a href={productLink}>
                <img src={productImageSrc} alt={productImageAltText} />
              </a>
              <span className="absolute h-5 w-5 block leading-5 bg-white text-center cursor-pointer  rounded-full -right-2 -top-2 p-1 hover:text-red-500">
                <FaTimes classname="text-primary" size={15} />
              </span>
            </div>
            <div className="overflow-hidden p-5 top-0">
              <h6>
                <a href="#">{productName}</a>
              </h6>
              <span className="text-light">
                {productQuantity} x ${amount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
