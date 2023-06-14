import BillingDetails from "../components/Checkout/BillingDetails";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function Checkout() {
  return (
    <>
      <BreadcrumbBanner title={"Checkout"} />
      <BillingDetails />
    </>
  );
}
