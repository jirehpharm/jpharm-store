import { AiOutlineClose } from "react-icons/ai";

import { ICartDrawerProps } from "./types";
import { productCartCard } from "./constant";
import CartItems from "../../Cards/CartCards/CartItems";

export default function ViewCartDrawer(product: ICartDrawerProps) {
  function closeDrawer(drawer: boolean) {
    product.setDrawer(drawer);
  }

  return (
    <section className="fixed top-0 right-0 md:max-w-80  lg:w-[450px] z-10 bg-white h-50% lg:h-full py-5 pl-7 pr-2">
      <div className="pr-5">
        <div className="flex justify-between touch-auto pl-7 py-5 pr-2 mb-6">
          <span className="text-xl font-semibold text-light">Cart</span>
          <button className="absolute right-2 font-extrabold text-black pr-3">
            <AiOutlineClose size={20} onClick={() => closeDrawer(false)} />
          </button>
        </div>
        <hr />
        <div className="">
          <CartItems product={[...productCartCard]} />
        </div>
        <div className="mt-0">
          <div className="px-0 py-8 border-y-[#e5eaee] border-t border-solid border-b">
            <h5 className="flex justify-between">
              Subtotal:
              <span className="text-secondary pr-3">
                $1000.00{product.productCount}
              </span>
            </h5>
          </div>
          <div className="mt-9 flex justify-between items-center">
            <a
              href={product.viewCartLink}
              className="btn btn-secondary text-center"
            >
              VIEW CART
            </a>
            <a href={product.checkOutCartLink} className="btn theme-btn-1 ">
              CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
