import { IWhyChooseUsProps } from "./types";

interface IWhyChooseUs {
  data: IWhyChooseUsProps[];
}

export default function WhyChooseUs(props: IWhyChooseUs) {
  const { data } = props;
  return (
    <div className=" bg-[#F2F6F7] py-20">
      <h1 className="text-center pb-4 text-2xl sm:text-3xl lg:text-5xl">Why Choose Us<span className="text-2xl sm:text-3xl lg:text-5xl text-secondary">.</span></h1>
      <div className="max-w-[300px] md:max-w-2xl lg:max-w-[950px] xl:max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-7">
        {data.map((item, index) => (
          <div key={index} className="p-8 border bg-white">
            <div className="grid grid-cols-7 pb-4">
              <div className="col-span-2">
                {item.icon && (
                  <item.icon className="h-20 w-16 text-secondary data-[state=active]:hover:text-white data-[state=active]:text-white" />
                )}
              </div>
              <h3 className="col-span-4 flex justify-center pl-3 items-center text-base lg:text-2xl">{item.title}</h3>
            </div>
            <p className="mb-0 text-light text-sm lg:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
