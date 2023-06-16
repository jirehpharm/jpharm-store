import classNames from "classnames";

import { CheckboxProps } from "./types";

export default function Checkbox(props: CheckboxProps) {
  const { id, className, required, name } = props;

  return (
    <input
      id={id}
      type="checkbox"
      className={classNames(
        "w-4 h-4 text-secondary bg-white border-gray-300 rounded focus:ring-secondary focus:ring-1",
        className
      )}
      required={required}
      name={name}
    />
  );
}
