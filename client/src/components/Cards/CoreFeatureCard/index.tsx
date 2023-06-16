import { ICoreFeatureProps } from "./types";

interface ICoreFeature {
  data: ICoreFeatureProps[];
}

export default function index(props: ICoreFeature) {
  const { data } = props;
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-center">Core Features</h1>
      <div className="grid grid-cols-4 mt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative border border-[#F4F4F4]  px-5 py-10 flex flex-col items-center text-center hover:shadow-medium group"
          >
            <span
              className="absolute content-[''] left-0 -bottom-1 w-0 h-1 group-hover:bg-secondary transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-[1] group-hover:w-full group-hover:visible"
              aria-hidden="true"
            ></span>
            <img src={item.image} alt="image" className="flex h-12 w-12" />
            <a href="#" className="mt-4 mb-3">
              <span className="font-extrabold text-xl text-black hover:text-secondary">
                {item.title}
              </span>
            </a>
            <p className="text-sm text-light leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
