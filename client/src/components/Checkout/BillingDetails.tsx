import { useState } from "react";
import { GlobeAltIcon, PencilIcon, UserIcon } from "@heroicons/react/20/solid";
import { IoCall } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

import { InputField } from "../Form/InputField";
import SelectField from "../Form/SelectField";
import { IOptionProps } from "../Form/types";
import { selectData } from "./constants";
import Textarea from "../Form/Textarea";
import Checkbox from "../Form/Checkbox";

export default function BillingDetails() {
  const [selected, setSelected] = useState<IOptionProps>();

  const handleSelect = (event: IOptionProps) => {
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
          <Checkbox name={"accept"} id="accept"/>
          <label htmlFor="accept" className="text-light">
            {" "}
            Create an account?
          </label>
        </div>
        <div className="mt-8">
          <h5 className="text-base">Order Notes (optional)</h5>
          <Textarea
            placeholder={
              "Notes about your order, e.g. special notes for delivery."
            }
            Icon={PencilIcon}
            name={"orderNotes"}
          />
        </div>
      </div>
    </div>
  );
}
