import * as Tabs from "@radix-ui/react-tabs";
import { get } from "lodash";
import { InquiryTabsProp } from "./types";

interface TabProps {
  tabsData: InquiryTabsProp[];
}

export const InquiryTabs = (props: TabProps) => {
  const { tabsData } = props;
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mt-24 mb-52">
        <Tabs.Root
          className="flex flex-col mt-4"
          defaultValue={get(tabsData, "0.tabTitle")}
        >
          <Tabs.List className="justify-between overflow-x-auto flex space-x-2 px-3">
            {tabsData?.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className="text-sm my-3 font-bold border-2 shadow-sm py-2 px-6 rounded-lg md:text-base lg:text-lg data-[state=active]:text-white data-[state=active]:bg-secondary data-[state=active]:border-secondary"
                value={item.tabTitle}
              >
                {item.tabTitle}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <div className="flex justify-end mx-2">
            <a href="" className="flex text-white bg-secondary rounded-md p-3 w-fit justify-end">
              Write Review
            </a>
          </div>
          {tabsData?.map((item, idx) => (
            <Tabs.Content
              key={idx}
              className="mt-10 p-3 md:p-10 bg-white rounded-b-md outline-none text-light"
              value={item.tabTitle}
            >
              {item.content}
            </Tabs.Content>
          ))}
          <div className="flex justify-end mx-2">
            <a href="" className="flex text-white bg-secondary rounded-md p-3 w-fit justify-end">
              Write Review
            </a>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
};
