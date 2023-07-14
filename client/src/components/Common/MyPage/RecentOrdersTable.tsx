import { useState } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

import { FaLessThan } from "react-icons/fa";
import Button from "../Button";
import { IRecentOrdersProps } from "./types";
import { AiOutlineDown } from "react-icons/ai";

export default function RecentOrdersTable(props: {
  IRecentOrders: IRecentOrdersProps[];
}) {
  const recentOrders = props.IRecentOrders;

  const [content, setContent] = useState(false);

  const handleDropdown = () => {
    setContent(!content);
  };
  const handleDropdownBlur = () => {
    setContent(false);
  };

  return (
    <div>
      <div className="mt-40">
        <div className="flex justify-center">
          <h3 className="text-[#000] text-base lg:text-2xl mb-0">
            Recent order List
          </h3>
        </div>
        <div className="flex justify-end visible lg:hidden">
          <CDropdown variant="btn-group" onBlur={handleDropdownBlur}>
            <div className="">
              <a onClick={handleDropdown}>
                <div className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#EDECEC] rounded-[5px] space-x-2 cursor-pointer">
                  Period Setting
                </div>
              </a>
            </div>

            <CDropdownMenu
              className={`absolute  ${content ? "block" : "hidden"} bg-white`}
            >
              <CDropdownItem
                href="#"
                className="text-[#000]  text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto"
              >
                Today
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto"
              >
                1 Week
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2"
              >
                1 month
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2"
              >
                3 month
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>

        <div className="relative lg:flex justify-end hidden lg:visible">
          <CDropdown
            variant="btn-group"
            direction="dropstart"
            onBlur={handleDropdownBlur}
          >
            <div className="">
              <a onClick={handleDropdown}>
                <div className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#EDECEC] rounded-[5px] space-x-2 cursor-pointer">
                  Period Setting
                </div>
              </a>
            </div>
            <CDropdownMenu
              className={`absolute  ${
                content ? "flex" : "hidden"
              } top-[-14px] left-[62%] my-2`}
            >
              <div className="my-auto text-[#000] flex  m-6">
                <h5
                  className="my-auto p-2 `${content ? 'left-' : '-left-96'}` text-sm lg:text-[13px] flex w-[53.46px] h-[24.821px] flex-col justify-center shrink-0 text-black text-center text-[13px] not-italic font-bold leading-[26px];
  font-family: Nunito; "
                >
                  period
                </h5>
                <div>
                  <CDropdownItem
                    href="#"
                    className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#EDECEC] rounded-[5px] ml-1"
                  >
                    Today
                  </CDropdownItem>
                </div>
                <div>
                  <CDropdownItem
                    href="#"
                    className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto bg-[#EDECEC] rounded-[5px] ml-1"
                  >
                    1 Week
                  </CDropdownItem>
                </div>
                <div>
                  <CDropdownItem
                    href="#"
                    className="text-[#000] text-sm lg:text-[13px] font-bold font-ibm p-2 bg-[#EDECEC] rounded-[5px] ml-1"
                  >
                    1 month
                  </CDropdownItem>
                </div>
                <div className="">
                  <CDropdownItem
                    href="#"
                    className="text-[#000] text-sm lg:text-[13px] bg-[#EDECEC] rounded-[5px] ml-1 font-bold font-ibm p-2"
                  >
                    3 month
                  </CDropdownItem>
                </div>
              </div>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>
      <div className="overflow-x-scroll xl:overflow-hidden">
        <div className="w-[1500px] lg:w-full grid grid-cols-7 mt-6 border-t-4 border-b-0 border-slate-500">
          <div>
            <div className="bg-[#EDECEC] ">
              <h5 className="py-3 lg:mx-5 text-sm md:text-[18px] font-bold text-center">
                Order Number
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-black text-lg not-italic font-bold leading-[26px]">
                  <a href={item.orderSrc} className="text-[#000]">
                    {item.orderNo}
                  </a>
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 lg:mx-5 text-sm md:text-[18px] font-bold text-center">
                Total Price
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-[#000]">
                  {item.totalPrice}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 whitespace-normal lg:mx-3 text-sm md:text-[18px] font-bold text-center">
                Date of Order
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-[#000]">
                  {item.dateOfOrder}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 mx-5 text-sm md:text-[18px] font-bold text-center">
                Buyer
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-[#000]">
                  {item.buyer}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 mx-5 text-sm md:text-[18px] font-bold text-center">
                Status
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-[#000]">
                  {item.status}
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 lg:mx-3 text-sm md:text-[18px] font-bold text-center">
                Track Number
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-base text-[#000]">
                  <a href={item.trackSrc} className="text-[#000]">
                    {item.trackNumber}
                  </a>
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-[#EDECEC]">
              <h5 className="py-3 mx-5 text-sm md:text-[18px] font-bold text-center">
                Download
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-[#000]">
                  <a href={item.downloadSrc} className="text-[#000]">
                    {item.download}
                  </a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="">
          <a href="#">
            <div className="text-[#46CEB6] text-sm lg:text-[13px] font-bold font-ibm p-2 my-auto border border-solid border-[#46CEB6] rounded-[5px] ml-1">
              More of Order List
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
