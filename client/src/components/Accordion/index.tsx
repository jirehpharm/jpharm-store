import classNames from "classnames";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./JAccordion";

interface ItemsProps {
  head: React.ReactElement<any>;
  content: React.ReactElement;
}
interface AccordionProps {
  items: ItemsProps[];
  type: any;
  collapsible: boolean;
  className: string;
  itemClass: string;
}
export default function CustomAccordion({
  items,
  type,
  collapsible = true,
  className = "",
  itemClass = "",
}: AccordionProps) {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      className={` ${className}`}
    >
      {items.map((item: ItemsProps, index: number) => (
        <AccordionItem
          key={index}
          value={index.toString()}
          className={classNames("", itemClass)}
          id={index.toString()}
        >
          <AccordionTrigger className={classNames("w-full")}>
            {item.head}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
