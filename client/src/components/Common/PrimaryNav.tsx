import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import Badge from "./Badge";
import ViewCartDrawer from "./CartDrawer/ViewCartDrawer";
import { InputField } from "../Form/InputField";

export const RightSide = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <a href="/login">
        <UserIcon className="h-5 w-5 lg:h-8 lg:w-6 text-black" />
      </a>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 text-black"
      >
        <div>
          <span
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCartIcon className="h-5 w-5 lg:h-8 lg:w-6 relative hover:text-black" />
            <Badge value={2} />
          </span>
        </div>
        <p className="mb-0 hover:text-secondary font-bold text-sm hidden lg:block">YOUR CART</p>
      </button>
      {isOpen && (
        <ViewCartDrawer
          closeDrawer={setIsOpen}
          checkOutCartLink={"/checkout"}
          viewCartLink={"/cart"}
          setDrawer={setIsOpen}
        />
      )}
    </>
  );
};

export default function PrimaryNav(): JSX.Element {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl lg:flex flex-row justify-between py-7 hidden">
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
        <div className="flex items-center gap-4 text-light">
          <form className="flex h-10">
            <div className="w-[500px]">
              <InputField
                placeholder={"Search here..."}
                type="search"
                Icon={MagnifyingGlassIcon}
                className="rounded-full h-[30px]"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <RightSide />
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
          <RightSide />
        </div>
      </div>
    </>
  );
}
