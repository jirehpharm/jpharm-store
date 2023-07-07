import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import SocialLinks from "../SocialLinks";
import { MapPinIcon } from "@heroicons/react/24/outline";

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
        <div className="flex flex-col items-center text-light">
          <p className="text-light">About US Term of Service Privacy Policy User Guide</p>
          <a href="/" className="cursor-pointer my-5">
            <img src="full_logo.png" alt="logo" className="w-[250px]" />
          </a>
          <div className="flex space-x-3 divide-x divide-light mt-6">
            <p className="text-light ">Company Name: Iremal Co., Ltd</p>
            <p className="text-light pl-3">Representative: Donghyun Lee</p>
            <p className="text-light pl-3">Mail Order Number: No. 2019-Anyang Dong-an-0812</p>
            <p className="text-light pl-3">Business Registration number: 138-81-52608</p>
          </div>
          <div className="flex space-x-3 divide-x divide-light">
            <p className="text-light ">Contact: 031-427-3851</p>
            <p className="text-light pl-3">Fax: 031-427-1404</p>
            <p className="text-light pl-3">Email: jirehpharm09@naver.com</p>
          </div>
          <p className="text-light">Personal Information Manager: Donghyun Lee {"("}dreamch83@naver.com{")"}</p>
          <p className="text-light mt-10 "><MapPinIcon className="text-light h-6 w-6 inline mr-3" />14109 Irefarm, 4th floor, 604 Gyeongsu-daero, Dongan-gu, Anyang-si, Gyeonggi-do {"("}Hogye- dong{")"}</p>
          <p className="text-light ">Copyright © 2014 Irefarm Co., Ltd. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
