import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Accordion, { ItemsProps } from "../Accordion";
import { isEmpty } from "lodash";

export interface IFaqDataPorps {
  categoryName: string;
  faq: ItemsProps[];
}
export default function Faq({ faqCategory }: { faqCategory: IFaqDataPorps[] }) {
  return (
    <div className="">
      {faqCategory.map((category) => (
        <>
          {!isEmpty(category.categoryName) && <h3 className="mt-5 text-center">{category.categoryName}</h3>}
          <Accordion
            items={category.faq}
            type={"single"}
            collapsible={true}
            className={""}
            itemClass={"border border-borderColour p-5"}
            icon={
              <>
                <PlusIcon className="w-6 h-6 bg-borderColor group-data-[state=open]:hidden group-data-[state=closed]:visible" />
                <MinusIcon className="w-6 h-6 bg-borderColor group-data-[state=open]:visible group-data-[state=closed]:hidden" />
              </>
            }
            trigerClass="flex justify-between"
          />
        </>
      ))}
    </div>
  );
}
