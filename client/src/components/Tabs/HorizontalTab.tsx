import * as Tabs from "@radix-ui/react-tabs";
import { get } from "lodash";
import { HTabsProp } from "./types";

interface TabProps {
  tabsData: HTabsProp[];
}

const HorizontalTab = (props: TabProps) => {
  const { tabsData } = props;
  return (
    <div className="mx-6 bg-[#F2F5F7]">
      <Tabs.Root
        className="flex flex-col mt-4"
        defaultValue={get(tabsData, "0.tabTitle")}
      >
        <Tabs.List className="justify-between overflow-x-auto flex space-x-2">
          {tabsData?.map((item, idx) => (
            <Tabs.Trigger
              key={idx}
              className="px-2 text-sm md:text-base lg:text-lg data-[state=active]:text-secondary border-b-2 border-transparent data-[state=active]:border-b-2 focus-visible:outline-0 data-[state=active]:border-secondary font-bold"
              value={item.tabTitle}
            >
              {item.tabTitle}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabsData?.map((item, idx) => (
          <Tabs.Content
            key={idx}
            className="mt-10 p-3 md:p-10 bg-white rounded-b-md outline-none text-light"
            value={item.tabTitle}
          >
            {item.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};

export default HorizontalTab;
