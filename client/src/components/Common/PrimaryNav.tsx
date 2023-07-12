import {
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import { InputField } from "../Form/InputField";
import { SearchBar } from "./SearchBar";

export default function PrimaryNav(): JSX.Element {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  return (
    <div className="px-5">
      <div className="mx-auto max-w-6xl lg:flex flex-row justify-between py-2 hidden">
        <div className="flex items-center">
          <a href="/" className="cursor-pointer">
            <div className="w-[200px]">
              <img
                src="full_logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>
        <div className="flex items-center text-light mx-2">
          <form className="flex h-10">
            <div className="">
              <SearchBar
                placeholder={"Search here..."}
                type="search"
                Icon={MagnifyingGlassIcon}
                className="bg-[#f2f2f2] h-[30px] lg:w-[750px] xl:w-[920px] shadow-lg"
              />
            </div>
          </form>
        </div>
      </div>

      {/* mobile view */}
      <div className="max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6x mx-auto flex flex-row justify-between py-3 px-2 lg:hidden">
        <div className="flex items-center">
          <a href="/" className="cursor-pointer">
            <div className="w-[150px]">
              <img
                src="full_logo.png"
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <form className="flex items-center">
            <div className="relative">
              <button className="h-[30px] focus-visible:outline-0" onClick={handleClick}>
                {showSearch === true ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <MagnifyingGlassIcon className="h-5 w-5" />
                )}
              </button>
              {showSearch === true && (
                <div className="absolute min-w-[180px] right-1/2 translate-x-[50%] z-[999999] shadow-light p-2 overflow-hidden">
                  <InputField
                    placeholder={"Search here..."}
                    type="search"
                    Icon={MagnifyingGlassIcon}
                    className="h-6"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
