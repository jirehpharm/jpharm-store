import { IBankDataProps } from "./types";

interface IBankStats {
  stats: IBankDataProps[];
}

export default function Bank(props: IBankStats) {
  const { stats } = props;
  return (
    <div>
      <div className="lg:max-w-6xl mx-auto pb-8">
        <div className="grid lg:grid-cols-10">
          <div className="flex flex-col items-center lg:col-span-4">
            <h3 className="text-lg md:text-xl">Bank Account Number</h3>
            <h4 className="text-sm md:text-base text-[#5d5959]">185-102680-01-019</h4>
            <h4 className="text-sm md:text-base text-[#5d5959]">Account holder: Jirepharm Co., Ltd</h4>
          </div>
          <div className="flex flex-col items-center mt-5 lg:mt-0 lg:col-span-6">
            <h3 className="text-lg md:text-xl">Download document for certificate</h3>
            <div className="grid md:grid-cols-2">
              {stats.map((item) => (
                <div className="flex items-center mr-2">
                  <item.Icon size={30} className="text-secondary m-2" />
                  <h6 className="mx-2 mb-0 text-sm md:text-base text-[#5d5959]">{item.description}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b-2"></div>
    </div>
  )
}
