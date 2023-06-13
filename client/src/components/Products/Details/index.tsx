import { BsCartFill } from "react-icons/bs";

import Counter from "./Counter";
import Button from "../../Common/Button";
import getStars from "../../getStars";

export default function Detail() {
  return (
    <div className="grid grid-cols-2 gap-4 pr-4">
      <div className="px-5">
        <img src="/placeholder/600x701.png" alt="600x701" />
      </div>
      <div>
        <div className="flex items-center">
          {getStars({ stars: 4 || 0 })}{" "}
          <div className="ml-4 text-gray-400 font-medium text-sm">{`(1 Customer Review)`}</div>
        </div>
        <h2 className="text-2xl">Hand Sanitizer</h2>
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <p className="text-secondary font-bold text-4xl mb-0"> $32.00</p>
          <p className="text-secondary font-bold text-3xl line-through opacity-60 mb-0">
            $46.00
          </p>
        </div>
        <div className="grid grid-cols-4 border-b border-gray-200 py-5">
          <p className="mb-0 text-sm col-span-1">Categories:</p>
          <h6 className="mb-0 text-sm text-light col-span-3">
            {`face-mask, ppe-kit, safety-suits`}
          </h6>
        </div>

        {/* Add To Cart */}
        <div className="flex items-center justify-between space-x-4">
          <Counter />
          <Button className="flex items-center">
            <BsCartFill className="h-4 w-4 inline mr-2" />
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}
