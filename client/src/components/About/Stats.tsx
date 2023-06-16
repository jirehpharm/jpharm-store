import { IStatsProps } from "./types";

interface IStats {
  data: IStatsProps[];
}

export default function Stats(props: IStats) {
  const { data } = props;
  return (
    <div className="bg-[#F2F6F7] py-24 my-16">
      <div className=" max-w-6xl mx-auto grid grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon && (
              <item.icon className="h-20 w-16 text-secondary data-[state=active]:hover:text-white data-[state=active]:text-white" />
            )}
            <h1 className="my-5">{item.number}</h1>
            <p className="text-light font-bold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
