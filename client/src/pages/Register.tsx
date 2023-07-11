import { FaSchool } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Checkbox from "../components/Form/Checkbox";
import { useState } from "react";

const memeber = [
  {
    icon: FaSchool,
    title: "School Member",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    btnLink: "/school-register",
    btnName: "School Register",
  },
  {
    icon: ImOffice,
    title: "Company Member",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    btnLink: "/company-register",
    btnName: "Company Register",
  },
];

const agree = [
  {
    title: "Terms of use",
    description:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?</p><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?",
  },
  {
    title: "Privacy Policy",
    description:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?</p><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?",
  },
  {
    title: "SMS and Email Agree",
    description:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?</p><br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nam nostrum odio fugiat iure sapiente iste esse vero incidunt optio laudantium non suscipit vel, cum eaque doloremque eum? Pariatur, ex?",
  },
];

export default function Register() {
  const [checkBoxes, setCheckBoxes] = useState([false, false, false]);

  const handleAllAgree = () => {
    const allAgreeChecked = checkBoxes.every((checkBox) => checkBox);
    const updatedChecked = checkBoxes.map(() => !allAgreeChecked);
    setCheckBoxes(updatedChecked);
  };

  return (
    <>
      <section>
        <BreadcrumbBanner title="Register" />
        <div className="my-24 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
          <h3 className="text-base md:text-xl p-3 text-center">
            To sign up for membership, you must agree to the terms and condition
            of membership and personal information processing policy.
          </h3>
          <div className="flex justify-end my-auto">
            <span className="mr-2 my-auto">All Agree</span>
            <div className="flex items-center">
              <Checkbox
                name="agree"
                checked={checkBoxes.every((checkBox) => checkBox)}
                onChange={handleAllAgree}
              />
            </div>
          </div>
          {agree.map((item, index) => (
            <>
              <h3 key={index} className="text-center pt-16">
                {item.title}
              </h3>
              <div className="text-base md:text-lg ml-3 lg:mx-auto p-3 bg-slate-200">
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              <div className="flex justify-end pt-5">
                <span className="mr-2 my-auto text-sm lg:text-base">
                  {item.title}
                </span>
                <div className="flex items-center">
                  <Checkbox
                    name="agree"
                    checked={checkBoxes[index]}
                    onChange={() => {
                      const updatedCheckboxes = [...checkBoxes];
                      updatedCheckboxes[index] = !checkBoxes[index];
                      setCheckBoxes(updatedCheckboxes);
                    }}
                  />
                </div>
              </div>
            </>
          ))}
          <div className="flex justify-end pt-5">
            <span className="mr-2 my-auto">All Agree</span>
            <div className="flex items-center">
              <Checkbox
                name="agree"
                checked={checkBoxes.every((checkBox) => checkBox)}
                onChange={handleAllAgree}
              />
            </div>
          </div>
          <div className="mt-20 md:flex justify-between">
            {memeber.map((item, index) => (
              <div key={index} className="flex justify-center m-3">
                <div className="border-2 p-6 bg-slate-200">
                  <div className="flex justify-center">
                    {item.icon && (
                      <item.icon className="h-20 w-16 text-secondary data-[state=active]:hover:text-white data-[state=active]:text-white" />
                    )}
                  </div>
                  <h3 className="text-center text-xl md::text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-center text-base md:text-lg">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <a href={item.btnLink} className="btn mt-5">
                      {item.btnName}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
