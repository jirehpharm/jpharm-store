import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { INavList } from "./types";

interface INavProps {
  navbarData: INavList;
}

export default function Navbar(props: INavProps) {
  const { navbarData } = props;
  return (
    <>
      {navbarData?.map((nav, idx: number) =>
        nav?.list ? (
          <div className="font-bold dropdown hover:text-secondary" key={idx}>
            <button>
              {nav.title}{" "}
              <ChevronDownIcon className="inline w-4 h-4 text-primary font-bold" />
            </button>

            {/* list */}
            <ul className="absolute bg-white min-w-[200px] pt-3">
              <div className="h-1 bg-secondary"></div>

              {nav?.list?.map((list, index: number) =>
                // sublist dropdown
                list?.subList ? (
                  <div
                    className="font-bold sub-dropdown relative hover:text-secondary"
                    key={index}
                  >
                    <a
                      href={list.link}
                      className="text-light font-medium hover:text-secondary"
                    >
                      <li
                        key={index}
                        className="w-full items-center flex p-3 mt-0 justify-between"
                      >
                        {list.title}
                        <ChevronRightIcon className="inline w-4 h-4 font-bold" />
                      </li>
                    </a>

                    <ul className="absolute right-0 bg-white min-w-[200px] mt-5">
                      <div className="h-1 bg-secondary"></div>
                      {list?.subList?.map((item: any, index: number) => (
                        <a href={item.link} className="text-light font-medium" key={index}>
                          <li
                            className="w-full items-center flex p-3 mt-0"
                          >
                            {item.title}
                          </li>
                        </a>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a href={list.link} className="text-light font-medium">
                    <li
                      key={index}
                      className="w-full items-center flex p-3 mt-0"
                    >
                      {list.title}
                    </li>
                  </a>
                )
              )}
            </ul>
          </div>
        ) : (
          <a href={nav.link} className="text-black font-bold">
            <li className="list-none">{nav.title}</li>
          </a>
        )
      )}
    </>
  );
}
