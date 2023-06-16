import classNames from "classnames";
import { ITextareaProps } from "./types";

export default function Textarea(props: ITextareaProps) {
  const { placeholder, Icon, id, className, required, name } = props;

  return (
    <div className="relative">
      <textarea
        className={classNames(
          "relative border-2 border-borderColor bg-white pl-5 pr-10 py-5 text-base w-full text-light focus:outline-0 focus:border focus:border-secondary focus-visible:outine-0 h-[130px] focus:ring-0",
          className
        )}
        placeholder={placeholder}
        id={id}
        required={required}
        name={name}
      ></textarea>
      {Icon && (
        <Icon className="h-5 w-5 text-secondary absolute right-3 top-2" />
      )}
    </div>
  );
}
