import { IHeroProps } from "./types";

const HeroSection = ({ offer, title, price, buttonUrl }: IHeroProps) => {
  return (
    <div className="max-w-6xl mx-auto my-14 grid grid-cols-5 text-center gap-7">
      {/* <div className="col-span-3"> */}
      <div className="col-span-3 flex items-center bg-[url(placeholder/1408x993.jpg)]">
        <div className="ml-10 w-[40%] text-left">
          <p className="text-secondary font-bold">{offer}</p>
          <h1 className="">{title}</h1>
          <p className="text-yellow-600 font-bold">{price}</p>
          <div>
            <a href={buttonUrl} className="btn">
              Shop now
            </a>
          </div>
        </div>
      </div>
      {/* <div className=" bg-[url(placeholder/1408x993.jpg)]"></div> */}
      {/* </div> */}
      <div className="col-span-2 space-y-7">
        <div>
          <img src={"placeholder/872x465.jpg"} alt="Image" className="" />
        </div>
        <div>
          <img src={"placeholder/872x465.jpg"} alt="Image" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
