import { IViewCartDrawer } from "./types";
import { AiOutlineClose } from "react-icons/ai";
import CartItems from "../../Cards/CartCards/cartItems";

export default function ViewCartDrawer({
  viewCartLink,
  checkOutCartLink,
  productCount,
  closeDrawer,
}: IViewCartDrawer) {
  const product = [
    {
      productName: "Asthetic spray",
      productLink: "#",
      productImageSrc: "img/product/10.png",
      productImageAltText: "image",
      productPrice: "$20",
      productQuantity: 1,
      productCount: 1,
      amount: 30.0,
      viewCartLink: "#",
      checkOutCartLink: "#",
    },
    {
      productName: "Asthetic spray",
      productLink: "#",
      productImageSrc: "img/product/10.png",
      productImageAltText: "image",
      productPrice: "$20",
      productQuantity: 1,
      productCount: 1,
      amount: 30.0,
      viewCartLink: "#",
      checkOutCartLink: "#",
    },
    {
      productName: "Asthetic spray",
      productLink: "#",
      productImageSrc: "img/product/10.png",
      productImageAltText: "image",
      productPrice: "$20",
      productQuantity: 1,
      productCount: 1,
      amount: 30.0,
      viewCartLink: "#",
      checkOutCartLink: "#",
    },
  ];
  return (
    <section className="fixed top-0 right-0 left-auto z-[10] overflow-y-auto bg-white h-screen py-5 pl-7 pr-2">
      <div className="flex justify-between touch-auto pl-7 py-5 pr-2 ">
        <span className="text-xl font-semibold text-light">Cart</span>
        <button
          className="absolute right-2 font-extrabold text-black pr-3"
          onClick={() => closeDrawer(false)}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
      <div className="space-y-3">
        {product.map((item: IViewCartDrawer, index: number) => (
          <CartItems {...item} key={index} />
        ))}
      </div>
      <div className="mt-6">
        <div className="px-0 py-5 border-y-[#e5eaee] border-t border-solid border-b">
          <h5>
            Subtotal:
            <span className="text-secondary"> {productCount}</span>
          </h5>
        </div>
        <div className="flex items-center">
          <a href={viewCartLink} className="btn btn-secondary text-center">
            VIEW CART
          </a>
          <a href={checkOutCartLink} className="btn theme-btn-1 ">
            CHECKOUT
          </a>
        </div>
      </div>
    </section>
  );
}
