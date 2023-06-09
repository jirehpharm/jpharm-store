//import React from 'react'
import ContactMessage from "./ContactMessage";

export default function Contact() {
  const contact = [
    {
      src: "contact-cards/Email.png",
      title: "Email Address",
      description1: "info@webmail.com",
      description2: "jobs@webexample.com",
    },
    {
      src: "contact-cards/Office.png",
      title: "Phone Number",
      description1: "+0123-456789",
      description2: "987-6543210",
    },
    {
      src: "contact-cards/Phone.png",
      title: "Office Address",
      description1: "18/A, New Born Town Hall",
      description2: "New York, US",
    },
  ];
  return (
    <>
      <section className="grid grid-row-3 grid-flow-col max-w-5xl mx-auto gap-3">
        {contact.map((con, index) => (
          <div
            key={index}
            className="text-center mb-7 pl-0 pr-[30px] pt-10 pb-2.5 shadow-[0_0_4px_rgba(0,0,0,0.1)] -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.1)"
          >
            <div className="mb-9 w-20 block mx-auto">
              <img src={con.src} alt="Icon Image" />
            </div>
            <h3>{con.title}</h3>
            <p>
              {con.description1} <br />
              {con.description2}
            </p>
          </div>
        ))}
      </section>
      <ContactMessage />
    </>
  );
}
