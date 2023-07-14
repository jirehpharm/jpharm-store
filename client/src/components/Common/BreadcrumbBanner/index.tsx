import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaHome } from "react-icons/fa";

interface IBreadcrumbProps {
  title: string;
}

export default function BreadcrumbBanner(props: IBreadcrumbProps) {
  const { title } = props;
  return (
    <div
      className={`bg-[#F2F5F7] py-28`}
    >
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto">
        <div className="mx-4">
          <h1>{title}</h1>
          <div>
            <ul className="flex items-center text-base gap-2">
              <li>
                <a
                  href="/"
                  className="text-light font-bold hover:text-secondary flex items-center gap-1"
                >
                  <FaHome className="w-5 h-5 inline text-secondary" />
                  Home
                </a>
              </li>
              <li className="text-primary font-bold">
                <ChevronRightIcon className="h-4 w-4 inline text-gray-700 mr-1" />{" "}
                {title}
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
