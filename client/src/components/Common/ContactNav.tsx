import { useState } from "react"
import { HeartIcon, PhoneIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

import ViewCartDrawer from "./CartDrawer/ViewCartDrawer";
import Badge from "./Badge";

export default function ContactNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="p-2 px-4 border-b border-gray-200">
      <div className="space-y-3 sm:space-y-0 max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center ">
        <p className="font-normal mb-0 text-sm md:text-lg">모든 상품 <span className="text-secondary">무료배송</span></p>
        <div className="flex space-x-3 mt-0 items-center">
          <a
            href="tel:+1234567890"
            className="flex items-center text-sm md:text-base font-normal text-black hover:text-black focus:text-black"
          >
            <PhoneIcon className="h-4 w-4 text-secondary" />
            031-427-3851
          </a>
          <a href="/wishlist">
            <HeartIcon className="h-5 w-5 lg:h-8 lg:w-6 text-black" />
          </a>
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
    </div >
  );
}
