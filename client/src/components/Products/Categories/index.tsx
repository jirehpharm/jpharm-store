import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ICategoryProps } from "./types";
import WidgetLayout from "../WidgetLayout";

export default function Categories(props: ICategoryProps) {
  const { title, list } = props;
  return (
    <WidgetLayout title={title}>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <a
              href={item.link}
              className="p-1 text-light lg:font-semibold md:text-sm text-sm"
            >
              {item.title}
            </a>
            <ArrowLongRightIcon className="h-4 w-4 text-light" />
          </li>
        ))}
      </ul>
    </WidgetLayout>
  );
}
