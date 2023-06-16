import { ICartDrawerProps } from "./types";
import { AiOutlineClose } from "react-icons/ai";
import CartItems from "../../Cards/CartCards/CartItems";
import { productCartCard } from "./constant";

export default function ViewCartDrawer(product: ICartDrawerProps) {
  function closeDrawer(drawer: boolean) {
    product.setDrawer(drawer);
  }

  return (
    <section className="fixed top-0 right-0 left-auto z-[10] overflow-y-auto  bg-white h-screen py-5 pl-7 pr-2">
      <div className="flex justify-between touch-auto pl-7 py-5 pr-2 ">
        <span className="text-xl font-semibold text-light">Cart</span>
        <button className="absolute right-2 font-extrabold text-black pr-3">
          <AiOutlineClose size={20} onClick={() => closeDrawer(false)} />
        </button>
      </div>
      <div className="space-y-3">
        <CartItems product={[...productCartCard]} />
      </div>
      <div className="mt-6">
        <div className="px-0 py-5 border-y-[#e5eaee] border-t border-solid border-b">
          <h5>
            Subtotal:
            <span className="text-secondary"> {product.productCount}</span>
          </h5>
        </div>
        <div className="flex items-center">
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
      {/*  </>
        )
      )} */}
    </section>
  );
}
