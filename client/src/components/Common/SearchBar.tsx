import { ISearchProps } from "./types";
import classNames from "classnames";

export const SearchBar = (props: ISearchProps) => {
  const { placeholder, type, Icon, id, name, className, required } = props;
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className={classNames(
          "relative border-2 placeholder:text-sm border-borderColor bg-white pl-5 pr-10 py-5 text-base w-full text-light focus:outline-0 focus:border focus:border-secondary focus-visible:outline-0 focus:ring-0",
          className,
        )}
        placeholder={placeholder}
      />
      {Icon && <Icon className="h-9 w-12 p-2 bg-secondary text-white absolute right-1 top-1 shadow-lg" />}
    </div>
  );
};
