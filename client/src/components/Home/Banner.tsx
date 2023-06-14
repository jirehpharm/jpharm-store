import { IBannerProps } from "./types";

export default function Banner(props: IBannerProps) {
  const { bgImage,
    miniTitle,
    title,
    description,
    widgets,
    link } = props;
  return (
    <section className={`bg-[url(${bgImage})] p-20`}>
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div></div>
        <div >
          <h6 className="text-secondary">{miniTitle}</h6>
          <h1>{title}</h1>
          <p className="my-3 text-light">{description}</p>
          <ul className="grid grid-cols-2">
            {widgets.map((items, index) => (
              <li key={index} className="pb-3 flex items-center text-light ">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <items.icon className="text-white" size={20} />
                </div>
                {items.title}
              </li>
            ))}
          </ul>
          <br />
          <div>
            <a href={link} className="underline hover:underline">VIEW PRODUCT</a>
          </div>
        </div>
      </div>
    </section>
  )
}
