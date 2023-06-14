import CartItems from "../components/Cart/CartItems";
import CartTotal from "../components/Cart/CartTotal";
import { cardTotalData, cartData } from "../components/Cart/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function Cart() {
  return (
    <>
      <BreadcrumbBanner title={"Cart"} />
      <div className="my-24">
        <CartItems data={cartData} />
        <CartTotal data={cardTotalData} />
      </div>
    </>

  )
}
