import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import SocialLinks from "../SocialLinks";

const navigation: TNavigation = [
  {
    name: "Company",
    list: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "#" },
      { name: "All Products", href: "#" },
      { name: "Location Map", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    name: "Services",
    list: [
      { name: "Order tracking", href: "/order-tracking" },
      { name: "Wish List", href: "/wishlist" },
      { name: "Login", href: "/login" },
      { name: "My Account", href: "/my-account" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Promotional Offers", href: "#" },
    ],
  },
  {
    name: "Customer Care",
    list: [
      { name: "Login", href: "/login" },
      { name: "My account", href: "/my-account" },
      { name: "Wish List", href: "/wishlist" },
      { name: "Order tracking", href: "/order-tracking" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Contact us", href: "/contact" },
    ],
  },
];

const socialData = [
  {
    url: "#",
    icon: FaFacebook,
  },
  {
    url: "#",
    icon: FaInstagram,
  },
  {
    url: "#",
    icon: AiOutlineTwitter,
  },
];
const email = "info@mail.com";
const phone = "+0123-456789";
const location = "Brooklyn, New York, United States";
const companyInfo =
  "Jireh Pharm offers a diverse portfolio of pharmaceutical products and services designed to meet the evolving needs of patients, healthcare providers, and partners. Our range of medications spans various therapeutic areas";

export default function Footer() {
  return (
    <div>
      <footer className="ltn__footer-area bg-primary text-white pt-28">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4 p-9">
          <div className="col-span-2">
            <a href="/" className="cursor-pointer">
              <img src="full_logo.png" alt="logo" className="w-[250px]" />
            </a>
            <p className=" text-white py-3 m-0 text-sm lg:text-base">{companyInfo}</p>
            <div>
              <ul>
                <li>
                  <p className=" text-white text-sm lg:text-base">{location}</p>
                </li>
                <li>
                  <p>
                    <a className=" text-white text-sm lg:text-base" href="tel:+0123-456789">
                      {phone}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a className=" text-white text-sm lg:text-base" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <SocialLinks socialData={socialData} />
          </div>

          {navigation.map((category: any, index: number) => (
            <div key={index}>
              <h4 className="text-white text-xl">{category.name}</h4>
              <ul className="mt-6">
                {category.list.map((item: any, index: number) => (
                  <li key={index} className="mb-6">
                    <a href={item.href} className=" text-white text-sm lg:text-base">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2">
            <div>
              <h4 className=" text-white">Newsletter</h4>
              <p className=" text-white text-sm lg:text-base">Subscribe to our weekly Newsletter and receive updates via email.</p>
              <div className="pb-4">
                <form action="#" className="flex">
                  <input type="email" name="email" placeholder="Email*" className="bg-white p-3 h-11 w-48" />
                  <button type="submit" className="bg-secondary p-3 h-11">
                    Submit
                  </button>
                </form>
              </div>
              <h5 className="text-white text-xl">We Accept</h5>
              <img src="/payment.png" alt="Payment Image" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
