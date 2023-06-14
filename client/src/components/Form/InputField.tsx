import { InputProps } from "./types";

export const InputField = (props: InputProps) => {
  const { placeholder, type, Icon } = props;
  return (
    <div className="relative">
      <input
        type={type}
        className="relative border-2 border-borderColor pl-5 pr-10 py-5 text-base w-full text-light focus:outline-0 focus:border focus:border-secondary focus-visible:outine-0"
        placeholder={placeholder}
      />
      {Icon && (
        <Icon className="h-5 w-5 text-secondary absolute right-3 top-1/3" />
      )}
    </div>
  );
};