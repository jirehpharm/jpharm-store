import { IBannerProps } from "./types";

export default function Banner(props: IBannerProps) {
  const { bgImage,
    miniTitle,
    title,
    description,
    widgets,
    link } = props;
  return (
    <section style={{backgroundImage: `url(${bgImage})`, backgroundSize:`100% 100%`, backgroundRepeat: `no-repeat`}}>
      <div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 py-32">
        <div></div>
        <div>
          <h6 className="text-secondary text-sm">{miniTitle}</h6>
          <h1 className="text-2xl sm:text-3xl">{title}</h1>
          <p className="my-3 text-light text-sm lg:text-base">{description}</p>
          <ul className="grid md:grid-cols-2">
            {widgets.map((items, index) => (
              <li key={index} className="pb-3 flex items-center text-light ">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <items.icon className="text-white" size={20} />
                </div>
                <p className="text-sm text-light lg:text-base">{items.title}</p>
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
