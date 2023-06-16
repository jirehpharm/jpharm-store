import classNames from "classnames";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./JAccordion";

export interface ItemsProps {
  head: React.ReactElement<any>;
  content: React.ReactElement;
}
export interface AccordionProps {
  items: ItemsProps[];
  type: any;
  collapsible: boolean;
  className: string;
  itemClass: string;
  icon?: React.ReactElement;
  trigerClass?: string;
}
export default function CustomAccordion({ items, type, collapsible = true, className = "", itemClass = "", icon, trigerClass = "" }: AccordionProps) {
  return (
    <Accordion type={type} collapsible={collapsible} className={` ${className}`}>
      {items.map((item: ItemsProps, index: number) => (
        <AccordionItem key={index} value={index.toString()} className={classNames("group", itemClass)} id={index.toString()}>
          <AccordionTrigger className={classNames("w-full group", trigerClass)}>
            {item.head}
            {icon ? icon : ""}
          </AccordionTrigger>
          <AccordionContent className="data-[state=closed]:animate-slideUp">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
