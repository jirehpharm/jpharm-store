import Checkbox from "../Form/Checkbox";
import Counter from "../Products/Details/Counter";
import { ICartData } from "./types";

interface ICart {
  data: ICartData[];
}

export default function CartItems(props: ICart) {
  const { data } = props;
  return (
    <div className="mx-auto mt-8 max-w-[300px] sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
      <table className="w-full border-y-2 border-gray-400">
        <tr className="space-x-8 text-left">
          <th className="p-2">
            <Checkbox name={"check"} />
          </th>
          <th className="p-2">Classification</th>
          <th className="p-2">Image</th>
          <th className="p-2">Product Name</th>
          <th className="p-2">Size</th>
          <th className="p-2">Manufacturer</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Price</th>
          <th className="p-2">Total</th>
          <th className="p-2">Delete</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index} className=" mt-3 text-left">
            <td className="p-2">
              <Checkbox name={"check"} />
            </td>
            <td className="p-2">medicine</td>
            <td className="p-2">
              <img
                src={"/img/banner/mask.png"}
                className="h-10 w-10"
                alt="Cart Items"
              />
            </td>
            <td className="p-2">{item.title}</td>
            <td className="p-2">md</td>
            <td className="p-2">abcd</td>
            <td className="p-2">
              <Counter />
            </td>
            <td className="p-2">{item.price}</td>
            <td className="p-2">$889</td>
            <td className="p-2">
              <button className="w-20 h-10 ">x</button>
            </td>
          </tr>
        ))}
      </table>
      <div className="border-y-2 border-gray-300 mt-12 flex justify-between">
        <div className="p-4 text-grayText font-bold text-xl">Total 2 Cases</div>
        <div className="flex justify-center items-center">
          <span className="text-grayText">Total</span>
          <div className="p-4 font-bold text-xl text-secondary">$889</div>
          <span>Won</span>
        </div>
      </div>
    </div>
  );
}
