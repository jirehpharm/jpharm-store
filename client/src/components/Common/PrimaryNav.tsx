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
          <img src="full_logo.png" alt="logo" className="w-[250px]" />
        </a>
      </div>
      <div className="flex items-center gap-4 text-light">
        <form className="flex h-10">
          <InputField
            placeholder={"Search here..."}
            type="search"
            Icon={MagnifyingGlassIcon}
            className="rounded-full w-[500px] h-[30px]"
          />
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
          <h6 className="mb-0 hover:text-secondary">View Cart</h6>
        </button>
        {isOpen && (
          <ViewCartDrawer
            productName={""}
            productLink={""}
            productImageSrc={""}
            productImageAltText={""}
            productPrice={""}
            productQuantity={0}
            amount={undefined}
            viewCartLink={"/cart"}
            checkOutCartLink={"/checkout"}
            productCount={undefined}
            closeDrawer={setIsOpen}
          />
        )}
      </div>
    </div>
  );
}
