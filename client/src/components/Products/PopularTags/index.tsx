import { IPopularTagsProps } from "./types";

interface IPopularTags {
  tags: IPopularTagsProps[];
}

export default function PopularTags(props: IPopularTags) {
  const { tags } = props;
  return (
    <aside className="flex ">
      <div className="flex-initial">
        <ul className="">
          <div className="flex flex-wrap">
            {tags.map((item, index) => (
              <li key={index} className="mx-1 my-1">
                <a
                  href={item.link}
                  className="p-2 flex flex-wrap font-bold text-sm bg-gray-100 text-light hover:bg-secondary hover:text-white uppercase"
                >
                  {item.tagName}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </aside>
  );
}
