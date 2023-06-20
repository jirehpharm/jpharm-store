import { FaEnvelope, FaEye, FaPhone, FaUser } from "react-icons/fa";

export const contactDetails = [
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

export const contactMessageForm = [
  {
    name: "name",
    type: "text",
    placeholder: "Enter email address",
    icon: FaUser,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Enter the Email",
    icon: FaEnvelope,
  },
  {
    type: "text",
    name: "subject",
    placeholder: "Enter the subject",
    icon: FaEye,
  },
  {
    type: "text",
    name: "phone",
    placeholder: "Enter the Phone Number",
    icon: FaPhone,
  },
];
