import { PhoneIcon } from "@heroicons/react/24/outline";
import CategoryDropdown from "./CategoryDropdown";
import { CategoryOptions, newsList, pagesList, shopList } from "./content";
import "../../../style/index.css";

const navbarData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Shop +",
    link: "",
    list: shopList,
  },
  {
    title: "News +",
    link: "",
    list: newsList,
  },
  {
    title: "Pages +",
    link: "",
    list: pagesList,
  },
  {
    title: "Contact",
    link: "#",
  },
];
export default function SecondaryNav() {
  return (
    <div className="mx-auto max-w-6xl flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <CategoryDropdown options={CategoryOptions} />
        {navbarData.map((nav, idx: number) =>
          nav?.list ? (
            <div className="font-bold dropdown" key={idx}>
              <button>{nav.title}</button>
              <ul className="absolute bg-white w-[200px] mt-1">
                <div className="h-1 bg-secondary"></div>
                {nav?.list?.map((list, index: number) => (
                  <li
                    key={index}
                    className="w-full items-center hover:bg-gray-300 flex p-3 mt-0"
                  >
                    <a href={list.link}>{list.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <a href={nav.link} className="text-black font-bold">{nav.title}</a>
          )
        )}
      </div>

      <div className="flex items-center font-bold">
        <PhoneIcon className="h-4 w-4 text-secondary" />
        +123-456-789-10
      </div>
    </div>
  );
}
