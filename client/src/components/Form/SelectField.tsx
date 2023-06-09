import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { get } from "lodash";

import { ISelectFieldProps } from "./types";

export default function SelectField({ selectData, handleSelect, selected, className }: ISelectFieldProps): JSX.Element {
  return (
    <Listbox value={selected} onChange={handleSelect}>
      {({ open }) => (
        <>
          <div className={classNames("relative", className)}>
            <Listbox.Button className="relative w-full text-left border-2 bg-white border-borderColor pl-5 pr-10 py-2 text-base text-light focus:outline-0  focus-visible:outine-0">
              <span className="block truncate text-gray-500 font-bold text-sm">{selected ? selected.label : get(selectData, "[0].label", "")}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ArrowDownIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm  scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-md scrollbar-thumb-gray-200">
                {selectData.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-gray-100 text-light font-medium" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>{item.label}</span>

                        {selected ? (
                          <span
                            className={classNames(active ? "text-white" : "text-indigo-600", "absolute inset-y-0 right-0 flex items-center pr-4")}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
