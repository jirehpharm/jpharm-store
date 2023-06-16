import { PencilIcon } from "@heroicons/react/20/solid";

import getStars from "../getStars";
import Button from "../Common/Button";
import { InputField } from "../Form/InputField";
import Textarea from "../Form/Textarea";
import Checkbox from "../Form/Checkbox";
import { fields } from "./constant";

export default function ReviewForm() {
  return (
    <section className="mt-10">
      <form action="#" className="bg-[rgb(240,244,247)] grid grid-rows-7">
        <h3 className=" pl-4 mx-7 mt-6 mb-4 border-l-2 border-secondary">
          Add a Review
        </h3>
        <p className=" py-3 mx-7 mt-2 mb-0 flex flex-wrap">
          Your Ratings: {getStars({ stars: 4 })}
        </p>
        <div className="px-7 space-y-6">
          <Textarea
            placeholder={"Type your comment..."}
            name={"comment"}
            Icon={PencilIcon}
          />
          {fields.map((field, index) => (
            <InputField
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              Icon={field.Icon}
            />
          ))}
        </div>
        <div className="flex items-center py-3 mx-7 mt-5 mb-0">
          <Checkbox name={"save"} id="default-checkbox" />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            {" "}
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <Button type="submit" className="my-5 mx-7 w-[150px]">
          SUBMIT
        </Button>
      </form>
    </section>
  );
}
