import Button from "../Common/Button";
import { ICardTotalData } from "./types"

interface ICartTotal {
  data: ICardTotalData[]
}

export default function CartTotal(props: ICartTotal) {
  const { data } = props;
  return (
    <div className="mx-auto mt-16 max-w-6xl">
      <div className="grid grid-cols-11">
        <div className="col-span-7"></div>
        <div className="col-span-4">
          <h4>
            Cart Totals</h4>
          <ul>
            {data.map((item, index) => (
              <li className="flex flex-wrap justify-between border-b odd:bg-[#F7F8FA] mt-0" key={index}>
                <p className="mb-0 p-3">{item.title}</p>
                <p className="mb-0 p-3">{item.price}</p>
              </li>
            ))}
          </ul>
          <Button className=" mt-5 w-full">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  )
}
