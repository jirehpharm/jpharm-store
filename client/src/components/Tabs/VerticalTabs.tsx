import * as Tabs from "@radix-ui/react-tabs";
import { get } from "lodash";
import { VTabsProp } from "./types";

interface TabProps {
  tabsData: VTabsProp[];
}

const VerticalTab = (props: TabProps) => {
  const { tabsData } = props;
  return (
    <div className="mx-3">
      <div className="max-w-6xl mx-auto my-24">
        <Tabs.Root className="mt-4 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid lg:grid-cols-11 gap-10" defaultValue={get(tabsData, "0.title")} orientation="vertical">
          <Tabs.List className="lg:col-span-3">
            {tabsData?.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className="p-5 flex justify-between border text-light hover:text-secondary data-[state=active]:hover:text-white data-[state=active]:text-white data-[state=active]:bg-[#171B2A] w-full"
                value={item.title}
              >
                {item.title}
                {item.icon && (
                  <item.icon className="h-5 w-5  hover:text-secondary data-[state=active]:hover:text-white data-[state=active]:text-white" />
                )}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabsData?.map((item, idx) => (
            <Tabs.Content key={idx} className=" lg:px-7 bg-white rounded-b-md outline-none text-light lg:col-span-8" value={item.title}>
              {item.content}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
};

export default VerticalTab;
