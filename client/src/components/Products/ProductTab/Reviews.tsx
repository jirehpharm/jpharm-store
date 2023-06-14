import ReviewForm from "../../ReviewForm";
import getStars from "../../getStars";

export default function Review() {
  return (
    <div>
      <div className="flex items-center">
        {getStars({ stars: 4 })}{" "}
        <p className="mb-0 text-sm text-yellow-400 ml-2 font-medium">
          (95 reviews)
        </p>
      </div>
      <div className="grid grid-cols-6 py-8 items-center border-b border-gray-200">
        <div className="col-span-1 flex ">
          <img
            src="/placeholder/540x688.jpg"
            alt="image"
            className="rounded-[50%] h-24 w-24"
          />
        </div>
        <div className="col-span-5">
          <div className="flex justify-between">
            <p className="mb-0 font-medium">Adam Smit</p>
            <div className="rounded-full px-5 py-1  border border-gray-200 hover:border-secondary flex items-center text-medium">
              September 3, 2020
            </div>
          </div>
          <div className="flex items-center">{getStars({ stars: 4 })} </div>
          <p className="mb-0 text-sm text-light my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            omnis fugit corporis iste magnam ratione.
          </p>
        </div>
      </div>
      <ReviewForm/>
    </div>
  );
}
