import { PhoneIcon } from "@heroicons/react/24/outline";

import CategoryDropdown from "./CategoryDropdown";
import { CategoryOptions, navbarData } from "./content";
import Navbar from "./Navbar";
import "../../../style/index.css";

export default function SecondaryNav() {
  return (
    <div className="mx-auto max-w-6xl flex items-center justify-between py-2">
      <div className="flex items-center space-x-8">
        <CategoryDropdown options={CategoryOptions} />
        <Navbar navbarData={navbarData} />
      </div>

      <div className="flex items-center font-bold">
        <PhoneIcon className="h-4 w-4 text-secondary" />
        +123-456-789-10
      </div>
    </div>
  );
}
