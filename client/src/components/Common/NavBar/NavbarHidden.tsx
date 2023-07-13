import { Disclosure } from "@headlessui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { InputField } from "../../Form/InputField";

import { IPrimaryNavProps } from "./types";
import { disclosureData } from "./content";
import SocialLinks from "../SocialLinks";

interface INavProps {
  navbarData: IPrimaryNavProps[];
}

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

export default function NavbarHidden(props: INavProps) {
  const { navbarData } = props;

  return (
    <Disclosure as="nav" className="bg-[#F2F5F7] lg:hidden px-2">
      <div className="bg-white px-2 flex pb-2 flex-1 border max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl items-center justify-between lg:ml-6 lg:justify-end">
        <span className="text-sm font-medium font-noto">MENU</span>
        <div className="w-full max-w-lg lg:max-w-xs"></div>
        <div className="flex items-center lg:hidden">
          {/* Mobile menu button */}
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            {open() ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <Disclosure.Panel className="lg:hidden overflow-y-scroll border border-borderColor shadow-light grid max-w-86 py-12 px-5 absolute z-[999999] w-[90%] sm:w-[60%] md:w-[60%] h-screen left-0 top-0 bg-white">
        <div className="p-4 flex justify-between">
          <span className="flex items-center font-bold text-secondary">
            Jirehpharm
          </span>
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open main menu</span>
            <XMarkIcon className=" h-6 w-6 text-secondary" aria-hidden="true" />
          </Disclosure.Button>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4"></div>
        <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-xs">
            <div className="relative">
              <div className="pointer-events-none absolute left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <InputField placeholder={"search..."} />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" absolute font-bold right-3 top-5 w-5 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-5 pb-3 pt-4">
          <div className="grid">
            {navbarData?.map((nav, idx) => (
              <a key={idx} href={nav.link} className="text-black font-ibm text-base mb-2 ml-2">
                <li className="list-none">{nav.title}</li>
              </a>
            )
            )}
          </div>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4"></div>
          <div className="mt-3 space-y-1">
            {disclosureData?.map((nav, idx: number) => (
              <Disclosure.Button
                key={idx}
                as="a"
                href={nav.link}
                className="flex items-center px-4 py-2 text-sm font-medium lg:text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                <span className="p-2 border mr-5">
                  {nav.icon && (
                    <nav.icon className="h-5 w-5 text-secondary hover:text-secondary text-sm lg:text-lg data-[state=active]:hover:text-white data-[state=active]:text-white" />
                  )}
                </span>
                {nav.title}
              </Disclosure.Button>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4"></div>
        <span className="flex justify-center">
          <SocialLinks socialData={socialData} />
        </span>
      </Disclosure.Panel>
    </Disclosure>
  );
}
