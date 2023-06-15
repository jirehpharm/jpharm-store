import BreadcrumbBanner from "../Common/BreadcrumbBanner";
import { InputField } from "../Form/InputField";

interface IOrderTracking {
  order: IOrderTrackingProps[];
}

export default function OrderTracking(props: IOrderTracking): JSX.Element {
  const { order } = props;
  return (
    <>
      <BreadcrumbBanner title={"Order Tracking"} />
      <section>
        <div className="block py-20 px-4 mx-auto max-w-3xl mb-27 py-21">
          <div className="bg-white">
            <form
              action="#"
              className="mt-7 pt-10 pr-12 pb-12 pl-12 z-[1] bg-sectionColor"
            >
              <p className="text-center flex flex-wrap text-light text-xl font-normal">
                To track your order please enter your Order ID in the box below
                and press the "Track Order" button. This was given to you on
                your receipt and in the confirmation email you should have
                received.
              </p>
              {order?.map((item, index) => (
                <>
                  <label
                    key={index}
                    htmlFor="order-id"
                    className=" text-light leading-6 text-center text-lg "
                  >
                    {item.inputLabel}
                  </label>
                  <InputField
                    placeholder={item.inputPlaceholder}
                    type={item.inputType}
                    id={item.inputId}
                    name={item.inputName}
                    className="placeholder:text-[#8cb2b2] placeholder:font-semibold mb-7"
                  />
                </>
              ))}
              <div className="mt-0 text-center">
                <button
                  className="btn uppercase text-base leading-6 font-normal"
                  type="submit"
                >
                  Track Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}