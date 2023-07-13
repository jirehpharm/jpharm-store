import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { IPrimaryNavProps } from "./types";
import Badge from "../Badge";
import { useState } from "react";
import ViewCartDrawer from "../CartDrawer/ViewCartDrawer";

interface INavProps {
  navbarData: IPrimaryNavProps[];
}

export default function NavbarPrimary(props: INavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { navbarData } = props;
  return (
    <div className="bg-[#F2F5F7] py-5 px-4">
      <div className="mx-auto max-w-6xl lg:flex items-center lg:justify-between hidden bg-white px-5 py-3 shadow-lg">
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
        {navbarData?.map((nav, idx: number) => (
          <a key={idx} href={nav.link} className="text-black font-bold font-ibm text-base">
            <li className="list-none">{nav.title}</li>
          </a>
        )
        )}
        <div className="flex space-x-3 mt-0 items-center">
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
    </div>
  );
}


