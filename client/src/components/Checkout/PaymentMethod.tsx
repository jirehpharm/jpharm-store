import Accordion from "../Accordion";
import CartTotal from "../Cart/CartTotal";
import { cardTotalData } from "../Cart/constants";
import Button from "../Common/Button";
import { paymentDetails } from "./constants";

export default function PaymentMethod() {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-6xl my-20">
      <div>
        <h4 className="border-l-2 border-secondary pl-3 mb-10">
          Payment Method
        </h4>
        <Accordion
          items={paymentDetails}
          type={"single"}
          collapsible={true}
          className={""}
          itemClass={"border border-gray-200"}
        />
        <p className="my-6 text-sm leading-6 text-light ">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <Button>Place Order</Button>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          <CartTotal data={cardTotalData} />
        </div>
      </div>
    </div>
  );
}
