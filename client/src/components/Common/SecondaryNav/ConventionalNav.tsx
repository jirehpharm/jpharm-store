import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { InputField } from "../../Form/InputField";

import { INavList } from "./types";
import { disclosureData } from "./content";
import { Fragment } from "react";
import SocialLinks from "../SocialLinks";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface INavProps {
  navbarData: INavList;
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

export default function Example(props: INavProps) {
  const { navbarData } = props;
  return (
    <Disclosure as="nav" className="bg-white lg:hidden px-2">
      <div className="flex pb-2 flex-1 border max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl m-2 items-center justify-between px-2 lg:ml-6 lg:justify-end">
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
            {navbarData?.map((nav, idx: number) =>
              nav?.list ? (
                <Menu as="div" className="">
                  <div className="flex justify-between">
                    <Menu.Button
                      key={idx}
                      as="a"
                      href={nav.link}
                      className="flex justify-between w-full items-center py-2 pl-3 pr-4 text-base font-medium text-light hover:text-secondary"
                    >
                      <p className="mb-0 text-light text-sm lg:text-lg hover:text-secondary">
                        {nav.title}{" "}
                      </p>
                      <ChevronDownIcon
                        className="h-5 w-5 my-auto text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="right-0 z-10 mt-2 w-full origin-top-right bg-white shadow-lg focus:outline-none">
                      <div className="py-1 w-full">
                        {nav?.list.map((item, idx: number) => (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                key={idx}
                                href={item.link}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-light",
                                  "block px-4 py-2 text-sm text-light font-noto lg:text-lg hover:text-secondary"
                                )}
                              >
                                {item.title}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <a
                  href={nav.link}
                  className="flex justify-between w-full items-center py-2 pl-3 pr-4 text-base font-medium text-light hover:text-secondary"
                >
                  <p className="mb-0 text-light text-sm lg:text-lg hover:text-secondary">
                    {nav.title}
                  </p>
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
