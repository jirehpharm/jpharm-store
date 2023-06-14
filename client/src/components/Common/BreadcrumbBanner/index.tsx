import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaHome } from "react-icons/fa";

interface IBreadcrumbProps {
  title: string;
}

export default function BreadcrumbBanner(props: IBreadcrumbProps) {
  const { title } = props;
  return (
    <div
      className={`bg-[url(https://themexriver.com/wp/vicodin/wp-content/themes/vicodin/assets/images/bg/14.jpg)] bg-cover py-28`}
    >
      <div className="mx-auto max-w-6xl">
        <h1>{title}</h1>
        <div className="">
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
  );
}
