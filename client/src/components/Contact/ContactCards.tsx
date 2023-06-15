import BreadcrumbBanner from "../Common/BreadcrumbBanner";
import ContactMessage from "./ContactMessage";
import { contactMessageForm } from "./constants";
import ContactMap from "./contactMap";
import { IContactCardDetailsProps } from "./types";

interface IContactCardDetails {
  contact: IContactCardDetailsProps[];
}

export default function Contact(props: IContactCardDetails) {
  const { contact } = props;
  return (
    <>
      <BreadcrumbBanner title={"Contact"} />
      <section className="grid grid-row-3 grid-flow-col max-w-5xl mx-auto mt-20 gap-7 mb-20">
        {/*  <div className=""> */}
        {contact.map((con, index) => (
          <div
            key={index}
            className="text-center mb-7 pt-12 px-7 pb-7 shadow-lg"
          >
            <div className="mb-9 w-20 block mx-auto ">
              <img src={con.src} alt="Icon Image" className="text-lg" />
            </div>
            <h3>{con.title}</h3>
            <p>
              {con.description1} <br />
              {con.description2}
            </p>
          </div>
        ))}
      </section>
      <ContactMessage contactMessage={contactMessageForm} />
      <ContactMap />
    </>
  );
}
