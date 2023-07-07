import { IStatsDataProps } from "./types";

interface IStatsData {
  stats: IStatsDataProps[];
}

export default function Stats(props: IStatsData) {
  const { stats } = props;
  return (
    <div className="p-9">
      <div className="max-w-xs mx-auto md:max-w-lg lg:max-w-xl xl:max-w-6xl">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {stats?.map(
            (
              item: { title: string; description: string; image: string },
              index: number
            ) => (
              <div className="flex items-center mt-5" key={index}>
                <div className="mb-5 mr-2 flex w-[20%]">
                  <img src={item.image} alt="#" />
                </div>
                <div className="flex flex-col justify-center ml-4">
                  <h4 className="text-lg">{item.title}</h4>
                  <p  className="text-light text-sm">{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
