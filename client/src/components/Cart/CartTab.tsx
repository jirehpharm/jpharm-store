import * as Tabs from "@radix-ui/react-tabs";
import { get } from "lodash";
import { ICartTabsProp } from "./types";
import { PlusIcon } from "@heroicons/react/24/outline";

interface TabProps {
  tabsData: ICartTabsProp[];
  addTitle?: string;
}

const CartTab = (props: TabProps) => {
  const { tabsData, addTitle } = props;
  return (
    <div className="mx-2">
      <Tabs.Root
        className="flex flex-col items-center mt-4"
        defaultValue={get(tabsData, "0.tabTitle")}
      >
        <Tabs.List className="sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl overflow-x-auto flex justify-center space-x-3 sm:space-x-8 ">
          {tabsData?.map((item, idx) => (
            <Tabs.Trigger
              key={idx}
              className="py-2 px-3 sm:px-6 text-sm md:text-base lg:text-lg rounded-lg shadow-md mb-2 shadow-[0px_1px_1px_0px_rgba(0, 0, 0, 0.25)] data-[state=active]:text-white text-grayText border border-[#F6F6F6] rounded-[10px] data-[state=active]:bg-secondary focus-visible:outline-0 data-[state=active]:border-secondary font-bold flex flex-col items-center"
              value={item.tabTitle}
            >
              <item.icon className="h-6 w-6" />
              {item.tabTitle}
            </Tabs.Trigger>
          ))}
          {addTitle && (
            <Tabs.Trigger
              className="py-2 px-6 text-sm md:text-base lg:text-lg data-[state=active]:text-white text-grayText border bg-[#E2F1FF] border-[#F6F6F6] rounded-[10px] data-[state=active]:bg-secondary focus-visible:outline-0 data-[state=active]:border-secondary font-bold flex flex-col items-center"
              value={"addCart"}
            >
              <PlusIcon className="h-6 w-6" />
              {addTitle}
            </Tabs.Trigger>
          )}
        </Tabs.List>
        {tabsData?.map((item, idx) => (
          <Tabs.Content
            key={idx}
            className="p-5 bg-white rounded-b-md outline-none text-light"
            value={item.tabTitle}
          >
            <div className="border border-secondary rounded-2xl text-center p-3 lg:p-7 my-3 lg:my-8 text-2xl lg:text-lg font-josefin font-medium">
              {item.title}
            </div>
            {item.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default CartTab;
