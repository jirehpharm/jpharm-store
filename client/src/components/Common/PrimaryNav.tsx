import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import Badge from "./Badge";
import ViewCartDrawer from "./CartDrawer/ViewCartDrawer";
import { InputField } from "../Form/InputField";

export default function PrimaryNav(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="mx-auto max-w-6xl flex flex-row justify-between py-7">
      <div className="flex items-center">
        <a href="/" className="cursor-pointer">
          <div className="w-[200px]">
            <img src="full_logo.png" alt="logo" className="w-full h-full object-contain" />
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
        <UserIcon className="h-8 w-6" />
        <div>
          <span
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingCartIcon className="h-8 w-6 relative hover:text-black" />
            <Badge value={2} />
          </span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 text-black"
        >
          <p className="mb-0 hover:text-secondary font-bold text-sm">
            YOUR CART
          </p>
        </button>
        {isOpen && (
          <ViewCartDrawer
            closeDrawer={setIsOpen}
            checkOutCartLink={"/checkout"}
            viewCartLink={"/cart"}
            setDrawer={setIsOpen}
          />
        )}
      </div>
    </div>
  );
}
