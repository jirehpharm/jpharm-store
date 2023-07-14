import CartTab from "../components/Cart/CartTab";
import { cartTabData } from "../components/Cart/constants";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function Cart() {
  return (
    <>
      <BreadcrumbBanner title={"Cart"} />
      <div className="mx-auto max-w-6xl">
        <div className="py-20">
          <h4 className="text-center mb-8">Status of cart</h4>
          <CartTab tabsData={cartTabData} />
        </div>
      </div>
    </>
  );
}
