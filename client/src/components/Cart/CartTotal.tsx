import { ICardTotalData } from "./types";

interface ICartTotal {
  data: ICardTotalData[];
}

export default function CartTotal(props: ICartTotal) {
  const { data } = props;
  return (
    <>
      <h4 className="border-l-2 border-secondary pl-3 mb-10">Cart Totals</h4>
      <ul>
        {data.map((item, index) => (
          <li
            className="flex flex-wrap justify-between border-b odd:bg-[#F7F8FA] mt-0 last:text-black last:font-bold"
            key={index}
          >
            <p className="mb-0 p-3">{item.title}</p>
            <p className="mb-0 p-3">{item.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
