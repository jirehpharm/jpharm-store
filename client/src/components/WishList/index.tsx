import Button from "../Common/Button";
import { IWishlistData } from "./types";

interface ICart {
  data: IWishlistData[]
}

export default function index(props: ICart) {
  const { data } = props;
  return (
    <div className="mx-auto mt-8 max-w-6xl">
      {data.map((item, index) => (
        <div className="py-5 grid grid-cols-6 border-b-2" key={index}>
          <div className="flex items-center justify-start">
            <button className="w-20 h-10 " >x</button>
          </div>
          <img src={item.image} className="h-[120px] w-[100px]" alt="Cart Items" />
          <h5 className="mb-0 flex items-center justify-center">{item.title}</h5>
          <p className="mb-0 flex items-center justify-center">{item.price}</p>
          <div className="mb-0 flex items-center justify-center">In Stock</div>
          <p className="mb-0 flex items-center justify-center"><Button variant="primary" children={"Add to Cart"}/></p>
        </div >
      ))}
    </div>
  )
}
