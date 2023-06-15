import * as Tabs from "@radix-ui/react-tabs";
import { get } from "lodash";
import { HTabsProp } from "./types";

interface TabProps {
  tabsData: HTabsProp[];
}

const HorizontalTab = (props: TabProps) => {
  const { tabsData } = props;
  return (
    <Tabs.Root
      className="flex flex-col mt-4"
      defaultValue={get(tabsData, "0.tabTitle")}
    >
      <Tabs.List className="border-b border-gray-200 flex space-x-4">
        {tabsData?.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="p-3 data-[state=active]:text-secondary border-b-2 border-transparent data-[state=active]:border-b-2 focus-visible:outline-0 data-[state=active]:border-secondary font-bold"
            value={item.tabTitle}
          >
            {item.tabTitle}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabsData?.map((item, idx) => (
        <Tabs.Content
          key={idx}
          className="p-5 bg-white rounded-b-md outline-none text-light"
          value={item.tabTitle}
        >
          <h4 className="text-lg font-medium">
            <span className="text-secondary">|</span> {item.title}
          </h4>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default HorizontalTab;
