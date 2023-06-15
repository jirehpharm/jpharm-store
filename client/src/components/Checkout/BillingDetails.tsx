import { useState } from "react";
import { GlobeAltIcon, PencilIcon, UserIcon } from "@heroicons/react/20/solid";
import { IoCall } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

import { InputField } from "../Form/InputField";
import SelectField from "../Form/SelectField";
import { selectData } from "./constants";
import { OptionProps } from "../Form/types";

export default function BillingDetails() {
  const [selected, setSelected] = useState<OptionProps>();

  const handleSelect = (event: OptionProps) => {
    setSelected(event);
  };

  return (
    <div className="mx-auto max-w-6xl my-8">
      <h4 className="border-l-2 border-secondary pl-3 mb-10">Billing Details</h4>
      <div className="p-5 border border-gray-200 py-10">
        <h5 className="text-base">Personal Information</h5>
        <div className="grid grid-cols-2 gap-8">
          <InputField placeholder={"First Name"} type="text" Icon={UserIcon} />
          <InputField placeholder={"Last Name"} type="text" Icon={UserIcon} />
          <InputField placeholder={"Email address"} type="email" Icon={RiMailFill} />
          <InputField placeholder={"Phone number"} type="text" Icon={IoCall} />
          <InputField placeholder={"Company name (optional)"} type="text" Icon={GlobeAltIcon} />
          <InputField placeholder={"Company address (optional)"} type="text" Icon={GlobeAltIcon} />
        </div>
        <div className="w-1/3 mt-6">
          <h5 className="text-base">Country</h5>
          <SelectField selectData={selectData} handleSelect={handleSelect} selected={selected} />
        </div>
        <div className="mt-8">
          <h5 className="text-base">Country</h5>
          <div className="grid grid-cols-2 gap-8">
            <InputField placeholder={"House number and street name"} type="text" />
            <InputField placeholder={"Apartment, suite, unit etc."} type="text" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div>
            <h5 className="text-base">Town / City</h5>
            <InputField placeholder={"City"} type="text" />
          </div>
          <div>
            <h5 className="text-base">State</h5>
            <InputField placeholder={"State"} type="text" />
          </div>
          <div>
            <h5 className="text-base">Zip</h5>
            <InputField placeholder={"Zip"} type="text" />
          </div>
        </div>
        <div className="mt-4">
          <input type="checkbox" id="accept" name="accept" value="accept" className="bg-white" />
          <label htmlFor="accept" className="text-light">
            {" "}
            Create an account?
          </label>
        </div>
        <div className="mt-8">
          <h5 className="text-base">Order Notes (optional)</h5>
          <div className="relative">
            <textarea className="relative border-2 border-borderColor bg-white pl-5 pr-10 py-5 text-base w-full text-light focus:outline-0 focus:border focus:border-secondary focus-visible:outine-0 h-[130px]"></textarea>
            <PencilIcon className="h-5 w-5 text-secondary absolute right-3 top-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
