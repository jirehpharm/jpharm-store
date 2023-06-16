import { ICoreFeatureProps } from "./types";

interface ICoreFeature {
  data: ICoreFeatureProps[];
}

export default function index(props: ICoreFeature) {
  const { data } = props;
  return (
    <div>
      <h1 className="text-center mt-12">Core Features</h1>
      <div className="grid grid-cols-4 max-w-6xl mx-auto mt-5">
        {data.map((item, index) => (
          <div key={index} className="transition duration-600 ease-out border border-[#F4F4F4] my-2 px-5 py-10 flex flex-col items-center text-center hover:shadow hover:shadow-light hover:border-b-4 hover:border-b-secondary">
            <img src={item.image} alt="image" className="flex h-12 w-12" />
            <a href="#" className="mt-4 mb-3">
              <span className="font-extrabold text-xl text-black hover:text-secondary">{item.title}</span>
            </a>
            <p className="text-sm text-light leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
