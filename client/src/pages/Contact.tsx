import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import ContactCards from "../components/Contact/ContactCards";
import ContactMessage from "../components/Contact/ContactMessage";
import {
  contactDetails,
  contactMessageForm,
} from "../components/Contact/constants";
import ContactMap from "../components/Contact/contactMap";

export default function Contact() {
  return (
    <>
      <BreadcrumbBanner title={"Contact"} />
      <ContactCards contact={contactDetails} />
      <ContactMessage contactMessage={contactMessageForm} />
      <ContactMap />
    </>
  );
}
