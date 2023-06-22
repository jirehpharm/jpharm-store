import Button from "../Common/Button";
import { IWishlistData } from "./types";

interface ICart {
  data: IWishlistData[]
}

export default function index(props: ICart) {
  const { data } = props;
  return (
    <div className="mx-auto mt-8 max-w-[300px] sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
      {data.map((item, index) => (
        <div className="py-5 grid grid-cols-1 md:grid-cols-6 border-b-2" key={index}>
          <div className="flex items-center justify-center">
            <button className="w-20 h-10 " >x</button>
          </div>
          <div className="pt-3 flex justify-center items-center">
            <img src={item.image} className="h-[120px] w-[100px] " alt="Cart Items" />
          </div>
          <h5 className="pt-3 mb-0 flex items-center justify-center text-base lg:text-lg ">{item.title}</h5>
          <p className="pt-3 mb-0 flex items-center justify-center text-sm lg:text-base">{item.price}</p>
          <div className="pt-3 mb-0 flex items-center justify-center text-sm lg:text-base">In Stock</div>
          <p className="pt-3 mb-0 flex items-center justify-center"><Button variant="primary" children={"Add to Cart"} /></p>
        </div >
      ))}
    </div>
  )
}
