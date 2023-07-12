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
          <h3 className="text-primary text-base lg:text-2xl">
            Recent order List
          </h3>
        </div>
        <div className="flex justify-end visible lg:hidden">
          <CDropdown variant="btn-group" onBlur={handleDropdownBlur}>
            <CDropdownToggle color="secondary" onClick={handleDropdown}>
              <div className="flex my-auto ml-2">
                Peroid Setting
                <AiOutlineDown />
              </div>
            </CDropdownToggle>
            <CDropdownMenu
              className={`absolute  ${
                content ? "block" : "hidden"
              }  bg-slate-50`}
            >
              <CDropdownItem
                href="#"
                className="text-primary text-sm lg:text-lg font-bold font-ibm p-2 my-auto"
              >
                Today
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-primary text-sm lg:text-lg font-bold font-ibm p-2 my-auto"
              >
                1 Week
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-primary text-sm lg:text-lg font-bold font-ibm p-2"
              >
                1 month
              </CDropdownItem>
              <CDropdownItem
                href="#"
                className="text-primary text-sm lg:text-lg font-bold font-ibm p-2"
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
            <CDropdownToggle color="secondary" onClick={handleDropdown}>
              <div className="flex">
                <FaLessThan className="my-auto mr-2" />
                Period Setting
              </div>
            </CDropdownToggle>
            <CDropdownMenu
              className={`absolute  ${
                content ? "flex" : "hidden"
              } top-0 left-[40%]`}
            >
              <div className="my-auto text-primary flex ">
                <h5 className="my-auto p-2 `${content ? 'left-' : '-left-96'}` text-sm lg:text-lg ">
                  period
                </h5>

                <CDropdownItem
                  href="#"
                  className="text-primary text-sm lg:text-lg font-bold font-ibm p-2 my-auto"
                >
                  Today
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="text-primary text-sm lg:text-lg font-bold font-ibm p-2 my-auto"
                >
                  1 Week
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="text-primary text-sm lg:text-lg font-bold font-ibm p-2"
                >
                  1 month
                </CDropdownItem>
                <CDropdownItem
                  href="#"
                  className="text-primary text-sm lg:text-lg font-bold font-ibm p-2"
                >
                  3 month
                </CDropdownItem>
              </div>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>
      <div className="overflow-x-scroll xl:overflow-hidden">
        <div className="w-[1500px] lg:w-full grid grid-cols-7 mt-6 border-t-4 border-b-0 border-slate-500">
          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 xl:mx-5 text-sm md:text-base text-center">
                Order Number
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  <a href={item.orderSrc} className="text-light ">
                    {item.orderNo}
                  </a>
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 xl:mx-5 text-sm md:text-base text-center">
                Total Price
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  {item.totalPrice}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 xl:mx-5 text-sm md:text-base text-center">
                Date of Order
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  {item.dateOfOrder}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 mx-5 text-sm md:text-base text-center">
                Buyer
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  {item.buyer}
                </h5>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 mx-5 text-sm md:text-base text-center">
                Status
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  {item.status}
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 xl:mx-5 text-sm md:text-base text-center">
                Track Number
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-base text-light">
                  <a href={item.trackSrc} className="text-light">
                    {item.trackNumber}
                  </a>
                </h5>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-slate-300">
              <h5 className="py-3 mx-5 text-sm md:text-base text-center">
                Download
              </h5>
            </div>
            {recentOrders?.map((item, index) => (
              <div className="" key={index}>
                <h5 className="text-center py-3 mx-3 text-sm lg:text-base text-light">
                  <a href={item.downloadSrc} className="text-light">
                    {item.download}
                  </a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="mr-2">More of Order List</Button>
      </div>
    </div>
  );
}
