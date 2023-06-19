import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

import { ICategory } from "./types";

interface CategoryDropdownProps {
  options: ICategory[];
}

export default function CategoryDropdown({ options }: CategoryDropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="bg-secondary text-white font-bold w-full hover:bg-secondary focus:bg-secondary flex gap-6 items-center px-4  py-4">
          <div className="pr-8">
            <Bars3Icon className="h-6 w-5 inline mr-2 font-bold" />
            CATEGORIES
          </div>
          <PlayIcon className="h-3 w-3 inline rotate-90" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 w-full origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 divide-y divide-gray-200">
            {options?.map((option) => (
              <Menu.Item key={option.link}>
                {({ active }) => (
                  <a
                    href={option.link}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-3 text-sm hover:font-bold text-light"
                    )}
                  >
                    {option?.icon && (
                      <option.icon className="h-4 w-4 inline mr-3" />
                    )}
                    {option.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
