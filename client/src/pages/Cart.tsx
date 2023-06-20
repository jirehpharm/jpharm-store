import CartItems from "../components/Cart/CartItems";
import CartTotal from "../components/Cart/CartTotal";
import { cardTotalData, cartData } from "../components/Cart/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Button from "../components/Common/Button";

export default function Cart() {
  return (
    <>
      <BreadcrumbBanner title={"Cart"} />
      <div className="my-24 mx-5">
        <CartItems data={cartData} />
        <div className="grid grid-cols-1 lg:grid-cols-11 mx-auto mt-16 max-w-xs lg:max-w-6xl sm:max-w-xl">
          <div className="col-span-7"></div>
          <div className="col-span-4">
            <CartTotal data={cardTotalData} />
            <a href="/checkout">
              <Button className=" mt-5 w-full">Proceed to Checkout</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
