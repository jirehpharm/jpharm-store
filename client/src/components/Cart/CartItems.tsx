import Checkbox from "../Form/Checkbox";
import Counter from "../Products/Details/Counter";
import { ICartData } from "./types";

interface ICart {
  data: ICartData[];
}

export default function CartItems(props: ICart) {
  const { data } = props;
  const btnCls =
    "shadow shadow[0px_1px_1px_0px_rgba(0, 0, 0, 0.25)] bg-secondary text-white py-2 px-3 rounded-[10px]";
  const selectClass =
    "shadow shadow[0px_1px_1px_0px_rgba(0, 0, 0, 0.25)] bg-secondary text-white py-2 rounded-[10px] focus:outline-0 focus:ring-0 focus:border-0 border-0";
  const optionClass = "bg-gray-400 text-white";

  return (
    <>
      <div className="mx-auto mt-8 max-w-[300px] sm:max-w-lg md:max-w-2xl lg:max-w-6xl overflow-x-scroll lg:overflow-hidden">
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
      </div>
      <div className="mx-auto mt-8 max-w-[300px] sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
        <div className="border-y-2 border-gray-300 mt-12 flex justify-between">
          <div className="p-4 text-grayText font-bold text-xl">
            Total 2 Cases
          </div>
          <div className="flex justify-center items-center">
            <span className="text-grayText">Total</span>
            <div className="p-4 font-bold text-xl text-secondary">$889</div>
            <span>Won</span>
          </div>
        </div>
        <div>
          <button className="border border-secondary p-3 text-secondary bg-white mt-8 rounded-[10px] font-bold text-xl">
            장바구니 묶음주문하기
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4  xl:flex justify-between items-center mt-8">
          <button className={btnCls}>Selective Delete</button>
          <select className={selectClass} defaultValue="shareCart">
            <option className="hidden" disabled value="shareCart">
              Share Cart
            </option>
            <option className={optionClass} value="copyCart">
              Copy Cart
            </option>
            <option className={optionClass} value="moveCart">
              Move Cart
            </option>
          </select>
          <select className={selectClass} defaultValue="Move Cart">
            <option className="hidden" value="moveCart">
              Move Cart
            </option>
            <option className={optionClass} value="cart1">
              Cart 1
            </option>
            <option className={optionClass} value="cart2">
              Cart 2
            </option>
            <option className={optionClass} value="cart3">
              Cart 3
            </option>
            <option className={optionClass} value="cart4">
              Cart 4
            </option>
          </select>
          <select className={selectClass} defaultValue="selectWishlist">
            <option className="hidden" disabled value="selectWishlist">
              Select Wishlist
            </option>
            <option className={optionClass} value="wishlist1">
              Wishlist 1
            </option>
            <option className={optionClass} value="wishlist2">
              Wishlist 2
            </option>
            <option className={optionClass} value="wishlist3">
              Wishlist 3
            </option>
            <option className={optionClass} value="wishlist4">
              Wishlist 4
            </option>
          </select>
          <button className={btnCls}>Quotation Save</button>
          <button className={btnCls}>Edufine Excel</button>
          <button className={btnCls}>Letter of Approval</button>
          <button className="border border-secondary py-2 px-3 text-secondary bg-white rounded-[10px]">
            Order
          </button>
        </div>
      </div>
    </>
  );
}
