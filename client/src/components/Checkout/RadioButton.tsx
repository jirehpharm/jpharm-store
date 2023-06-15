import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";

interface RadioProps {
  name: string;
  title: string;
  icon?: string;
}

export default function RadioButton(props: RadioProps) {
  const { name, title, icon } = props;

  return (
    <RadioGroup value={name}>
      <div className=" flex w-full">
        <RadioGroup.Option value={name} className={"w-full focus-visible:outline-0"}>
          {({ active, checked }) => (
            <div className="flex items-center space-x-4 w-full p-5">
              <span
                className={classNames(
                  active ? "bg-gray-600 border-transparent" : "bg-white",
                  checked ? "ring-1 ring-offset-2 ring-gray-400" : "",
                  "mt-0.5 h-3 w-3 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                )}
                aria-hidden="true"
                id={name}
              ></span>
              <RadioGroup.Label
                as="label"
                className="flex text-base font-bold text-gray-900"
                htmlFor={name}
              >
                {title}
                {icon && (
                  <div className="w-[200px]">
                    <img
                      src={icon}
                      alt="image"
                      className="w-full h-full object-contain border ml-4"
                    />
                  </div>
                )}
              </RadioGroup.Label>
            </div>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  );
}
