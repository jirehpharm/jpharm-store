import { IAddressProps } from "./types";

interface Address{
  data: IAddressProps[];
}

export default function Address(props: Address) {
  const { data } = props;
  return (
    <div className="grid sm:grid-cols-2 ml-7 gap-2">
      {data?.map((item,index)=> (
        <div key={index}>
          <p className="font-bold">{item.title}</p>
          <p className="text-light">{item.subTitle}</p>
          <p className="text-light">{item.address}</p>
          <p className="text-light">{item.mobile}</p>
        </div>
      ))}
    </div>
  )
}
