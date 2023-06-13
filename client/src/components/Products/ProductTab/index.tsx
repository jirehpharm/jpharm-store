import * as Tabs from "@radix-ui/react-tabs";

const tab1 = {
  tabTitle: "Description",
  title: "Lorem ipsum dolor sit amet elit.",
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  <br/><br/>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat`,
};

const ProductTab = () => (
  <Tabs.Root className="flex flex-col mt-4" defaultValue={"tab1"}>
    <Tabs.List className="border-b border-gray-200 flex space-x-4">
      <Tabs.Trigger
        className="p-3 data-[state=active]:text-secondary border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary font-bold"
        value={"tab1"}
      >
        Description
      </Tabs.Trigger>
      <Tabs.Trigger
        className="p-3 data-[state=active]:text-secondary border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary font-bold"
        value={"tab2"}
      >
        Reviews
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black text-light"
      value={"tab1"}
    >
      <h4 className="text-lg font-medium">
        <span className="text-secondary">|</span> {tab1.title}
      </h4>
      <p
        className="text-light text-base"
        dangerouslySetInnerHTML={{ __html: tab1.content }}
      />
    </Tabs.Content>
  </Tabs.Root>
);

export default ProductTab;
