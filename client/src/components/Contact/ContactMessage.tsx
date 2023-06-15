import Heading from "../Common/Heading";
import "../../style/index.css";
import { IContactMessageFormProps } from "./types";
import { InputField } from "../Form/InputField";

interface IContactMessage {
  contactMessage: IContactMessageFormProps[];
}
export default function ContactMessage(props: IContactMessage) {
  const { contactMessage } = props;
  return (
    <>
      <section className=" max-w-5xl mx-auto">
        <div className="relative max-w-5xl mx-auto gap-3 mb--25 mb-10">
          <div className="mb--25 mb-40 mt-7 z-[1] pt-10 pb-12 px-12 shadow-lg bg-white">
            <Heading title="Get A Quote" />
            <form
              id="contact-form"
              action="#"
              method="post"
              className="grid grid-cols-2 gap-8 mb-7 mx-1 p-3"
            >
              {contactMessage.map((con, index) => (
                <div
                  key={index}
                  className="relative border-2 border-borderColor"
                >
                  <InputField
                    key={index}
                    placeholder={con.placeholder}
                    type={con.type}
                    name={con.name}
                    Icon={con.icon}
                  />
                </div>
              ))}
              <div className=" top-7 col-span-2">
                <textarea
                  name="message"
                  placeholder="Enter message"
                  className="border-2 border-borderColor w-full p-5 mb-7 pr-10 pl-5 px-5 py-3"
                ></textarea>
              </div>
              <p className="col-span-2">
                <label className="input-info-save mb-0  text-sm ">
                  <input type="checkbox" name="agree" /> Save my name, email,
                  and website in this browser for the next time I comment.
                </label>
              </p>
              <div className="btn-wrapper mt-0 col-span-2">
                <button className="btn" type="submit">
                  get a free service
                </button>
              </div>
              <p></p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
