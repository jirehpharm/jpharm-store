import { PencilIcon } from "@heroicons/react/20/solid";

import { IContactMessageFormProps } from "./types";
import Heading from "../Common/Heading";
import { InputField } from "../Form/InputField";
import Textarea from "../Form/Textarea";
import Checkbox from "../Form/Checkbox";

interface IContactMessage {
  contactMessage: IContactMessageFormProps[];
}

export default function ContactMessage(props: IContactMessage) {
  const { contactMessage } = props;
  return (
    <>
      <section className="lg:max-w-6xl mx-auto p-3">
        <div className="relative gap-3 mb-25">
          <div className="mb-25 m-5 mb-40 mt-7 z-[1] pt-10 pb-12 px-6 md:px-12 lg:px-12 shadow-lg bg-white">
            <Heading title="Get A Quote" />
            <form
              id="contact-form"
              action="#"
              method="post"
              className="md:grid grid-cols-2 gap-8 mb-7 space-y-4 md:space-y-0 mx-1 p-3"
            >
              {contactMessage.map((con, index) => (
                <InputField
                  key={index}
                  placeholder={con.placeholder}
                  type={con.type}
                  name={con.name}
                  Icon={con.icon}
                />
              ))}
              <div className=" top-7 col-span-2">
                <Textarea
                  placeholder={"Enter message"}
                  name={"message"}
                  Icon={PencilIcon}
                />
              </div>
              <p className="col-span-2">
                <label className="input-info-save mb-0 text-sm">
                  <Checkbox name={"agree"} id={"agree"} className="mr-2" />
                  Save my name, email, and website in this browser for the next
                  time I comment.
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
