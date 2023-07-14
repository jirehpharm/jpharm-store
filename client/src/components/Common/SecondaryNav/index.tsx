import CategoryDropdown from "./CategoryDropdown";
import { CategoryOptions, navbarData } from "./content";
import Navbar from "./Navbar";
import "../../../style/index.css";

export default function SecondaryNav() {
  return (
    <div className="mx-4">
      <div className="mx-auto max-w-6xl lg:flex items-center lg:justify-between py-2 hidden">
        <div className="flex items-center space-x-8">
          <CategoryDropdown options={CategoryOptions} />
          <Navbar navbarData={navbarData} />
        </div>
      </div>
    </div>
  );
}
