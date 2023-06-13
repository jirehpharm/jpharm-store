//import { IPopularTagsProps } from "./types";

export default function PopularTags(/* { tagName, link }: IPopularTagsProps */) {
  const tags = [
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
    {
      tagName: "Doctor",
      link: "#",
    },
  ];
  return (
    <aside className="flex ">
      <div className="flex-initial px-4 relative mx-auto max-w-6xl">
        <div className="flex-initial mb-10 pt-8 pr-7 pb-10 pl-9 p-0 border">
          <h4 className="relative pl-11 text-lg font-semibold mb-6">
            <span className=" text-light px-3 py-1 ">--</span> Popular Tags
          </h4>
          <ul className="">
            <div className="relative flex flex-wrap  m-0 p-0">
              {tags.map((item, index) => (
                <li key={index} className="mx-1 my-1">
                  <a
                    href={item.link}
                    className=" relative p-2 flex flex-wrap font-bold text-sm bg-gray-100 text-light hover:bg-secondary hover:text-white uppercase"
                  >
                    {item.tagName}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </aside>
  );
}
