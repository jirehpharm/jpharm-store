//import React from "react";
import { FaUser, FaEnvelope, FaEye, FaPhone } from "react-icons/fa";

import Heading from "../Common/Heading";
import "../../style/index.css";

export default function ContactMessage() {
  const ContactMessage = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter email address",
      icon: <FaUser />,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter the Email",
      icon: <FaEnvelope />,
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Enter the subject",
      icon: <FaEye />,
    },
    {
      type: "text",
      name: "phone",
      placeholder: "Enter the Phone Number",
      icon: <FaPhone />,
    },
  ];
  return (
    <>
      <section className="max-w-5xl mx-auto">
        <div className="contact-msg max-w-5xl mx-auto gap-3 mb--25 mb-10">
          <div className=" mb--25 mb-40 relative mt-7 z-[1] pt-10 pb-12 px-12 shadow -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1) bg-white">
            <Heading title="Get A Quote" />
            <form
              id="contact-form"
              action="#"
              method="post"
              className="grid grid-cols-2 gap-8 mb-7 mx-1 p-3"
            >
              {ContactMessage.map((con, index) => (
                <div
                  key={index}
                  className="relative border-2 border-borderColor flex items-center pr-3"
                >
                  <input
                    key={index}
                    className="focus:border-secondary focus-visible:outline-0 bg-white w-full p-5 py-5 pr-10 pl-5"
                    type={con.type}
                    name={con.type}
                    placeholder={con.placeholder}
                  />
                  {con.icon && <span className="">{con.icon}</span>}
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
