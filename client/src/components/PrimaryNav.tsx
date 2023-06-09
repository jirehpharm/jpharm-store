import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Badge from "./Common/Badge";

export default function PrimaryNav() {
  return (
    <div className="mx-auto max-w-6xl flex flex-row justify-between py-7">
      <div className="flex items-center">
        <img src="full_logo.png" alt="logo" className="w-[250px]" />
        {/* <h2 className="font-bold text-black mb-0">JirehPharm</h2> */}
      </div>
      <div className="flex items-center gap-4 text-light">
        <div className="min-w-[500px] rounded-full shadow-light">
          <form className="flex h-10">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full bg-white pl-4 pr-8 rounded-full focus-visible:outline-0"
            />
            <button
              type="submit"
              className="p-2 border-0 focus-visible:outline-0"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <UserIcon className="h-8 w-6" />
        <div>
          <span className="flex items-center cursor-pointer">
            <ShoppingCartIcon className="h-8 w-6 relative hover:text-black" />
            <Badge value={2} />
          </span>
        </div>
        <a href="#" className="flex items-center space-x-2 text-black">
          <h6 className="mb-0 hover:text-secondary">View Cart</h6>
        </a>
      </div>
    </div>
  );
}
