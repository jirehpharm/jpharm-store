import CartTab from "../components/Cart/CartTab";
import CartTotal from "../components/Cart/CartTotal";
import { cardTotalData, cartTabData } from "../components/Cart/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Button from "../components/Common/Button";

export default function Cart() {
  return (
    <>
      <BreadcrumbBanner title={"Cart"} />
      <div className="mx-auto max-w-5xl">
        <div className="py-20">
          <h4 className="text-center mb-8">Status of cart</h4>
          <CartTab tabsData={cartTabData} addTitle={"ADD CART"} />
        </div>
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
