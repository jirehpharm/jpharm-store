import BillingDetails from "../components/Checkout/BillingDetails";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";

export default function Checkout() {
  return (
    <>
      <BreadcrumbBanner title={"Checkout"} />
      <BillingDetails />
      <PaymentMethod />
    </>
  );
}
