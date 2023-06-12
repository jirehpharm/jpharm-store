import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface CategoryDropdownProps {
  options: { label: string; href: string }[];
}

export default function CategoryDropdown({ options }: CategoryDropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center btn w-full justify-center space-x-4 rounded-md bg-white px-0 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-secondary focus:bg-secondary">
          <Bars3Icon className="h-6 w-6 inline mr-2" />
          ALL CATEGORIES
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
            {options.map((option) => (
              <Menu.Item key={option.href}>
                {({ active }) => (
                  <a
                    href={option.href}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-3 text-sm "
                    )}
                  >
                    {option.label}
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
