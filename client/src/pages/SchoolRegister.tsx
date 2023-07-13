import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";

export default function SchoolRegister() {
  return (
    <div>
      <BreadcrumbBanner title="School Register" />
      <div className="my-24 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="mt-10 pt-10 pl-5 md:pl-10">
          <h3 className="text-base lg:text-2xl lg:pl-10 sm:pl-0">
            Website User Information Register
          </h3>
        </div>
        <div className="mt-1 pl-5 lg:pl-10">
          <div className="sm:grid grid-cols-2 text-center border border-gray-400">
            <h5 className="bg-slate-200 text-base lg:text-lg md:max-w-[310px] p-2 my-auto">
              Type of User
            </h5>
            <div className="text-center md:text-left text-base lg:text-lg my-auto md:pl-10 text-primary">
              <strong>School Member</strong>
            </div>
          </div>

          <div className="sm:grid grid-cols-2 border border-gray-400">
            <h5 className="bg-slate-200 text-center py-10 text-base lg:text-lg md:w-[310px] mb-0 ">
              ID
            </h5>
            <div className="md:pl-1 text-center md:text-left text-light">
              English,number._ only available, You need to put more than 3
              <div className="w-[52%] mx-auto">
                <InputField
                  type="text"
                  name="ID"
                  placeholder="ID"
                  className="mb-2 h-[50px] w-full"
                />
              </div>
            </div>
          </div>

          <div className="sm:grid grid-cols-2 text-center border border-gray-400">
            <h5 className="bg-slate-200 md:w-[310px] mb-0 py-5 text-base lg:text-lg">
              Password*
            </h5>
            <div className="w-[80%] md:w-[50%] mx-auto my-2">
              <InputField
                type="text"
                name="Password"
                placeholder={""}
                className="mt-2 h-[50px] w-full"
              />
            </div>
          </div>

          <div className="sm:grid grid-cols-2 text-center border border-gray-400">
            <h5 className="md:w-[310px] bg-slate-200 mb-0 py-5 text-base lg:text-lg">
              Password Check*
            </h5>
            <div className="w-[80%] md:w-[50%] mx-auto">
              <InputField
                type="text"
                name="Password Check"
                placeholder={""}
                className="my-2 h-[50px] w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-10 pl-5 md:pl-10">
          <h3 className="text-base lg:text-2xl lg:pl-10 sm:pl-0">
            User Information
          </h3>
          <div className="mt-1">
            <div className="border border-gray-400">
              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="md:w-[310px] bg-slate-200 mb-0 py-5 text-base lg:text-lg">
                  Type of User
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="Type of User"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="bg-slate-200 md:w-[310px] mb-0 py-5 text-base lg:text-lg">
                  Email
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="email"
                    name="Email"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className=" sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="bg-slate-200 md:w-[310px] mb-0 py-5 text-base lg:text-lg">
                  Email for Tax
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="Email for Tax"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Telephone Number
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="Telephone Number"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  phone Number
                </h5>
                <div className=" w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="phone Number"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  School Name
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="School Name"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  School Original Number
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="School Original Number"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Representative Name
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="Representative Name"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:py-20 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Address
                </h5>

                <div className="lg:flex flex-wrap">
                  <div className="w-[80%] md:w-[50%] mx-auto lg:mx-10 lg:grid grid-cols-2 gap-4">
                    <InputField
                      type="text"
                      name="Address"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                    <div className="w-[30%] lg:w-[50%] flex">
                      <Button className="btn h-12 my-2">Address</Button>
                      <Button className="btn h-12 my-2">Search</Button>
                    </div>
                  </div>
                  <div>
                    <div className="w-[80%] md:w-[50%] mx-auto lg:mx-10 lg:grid grid-cols-2 gap-4">
                      <InputField
                        type="text"
                        name="Based Address"
                        placeholder={"Based Address"}
                        className="my-2 h-[50px] w-[80%] lg:w-[130%]"
                      />{" "}
                      <h6 className="md:my-auto lg:pl-28 text-base lg:text-lg text-light">
                        Based Address
                      </h6>
                    </div>
                    <div className="w-[80%] md:w-[50%] mx-auto lg:mx-10 lg:grid grid-cols-2 gap-4">
                      <InputField
                        type="text"
                        name="Detailed Address"
                        placeholder={"Detailed Address"}
                        className="my-2 h-[50px] w-[80%] lg:w-[130%]"
                      />{" "}
                      <h6 className="md:my-auto lg:pl-28 text-base lg:text-lg text-light">
                        Detailed Address
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] text-base lg:text-lg  bg-slate-200">
                  Department
                </h5>
                <div className="py-2">
                  <div className="flex flex-wrap w-[20%] h-[20%] md:w-full ml-10 mx-auto">
                    <InputField
                      type="radio"
                      name="Department"
                      placeholder={""}
                      className="my-2 pl-0 pr-0 pb-1"
                    />
                    <label className="flex pl-2 md:pr-3 my-auto text-base lg:text-lg">
                      Administrative office
                    </label>
                    <InputField
                      type="radio"
                      name="Department"
                      placeholder={""}
                      className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                    />
                    <label className="flex pl-2 md:pr-3 my-auto text-base lg:text-lg">
                      Health Room
                    </label>
                  </div>
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Original Number for Nurse
                </h5>
                <div className="lg:grid grid-cols-2">
                  <div className="w-[80%] md:w-[50%] mx-auto">
                    <InputField
                      type="file"
                      name="NurseOriginalNUmber"
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Nurse Certificate Number
                </h5>
                <div className="lg:grid grid-cols-2">
                  <div className="w-[80%] md:w-[50%] mx-auto">
                    <InputField
                      type="file"
                      name="NurseCertificateNumber"
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                  Etc.,
                </h5>
                <div className="sm:flex my-2 mx-auto lg:grid grid-cols-2 items-center">
                  <div className="w-[80%] md:w-[50%] mx-auto">
                    <InputField
                      type="file"
                      name="Etc."
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                  <Button className="btn h-12 w-36">Add</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-200">
              <ul className="p-4">
                <li className="text-base lg:text-lg">
                  {"*"} Please attach 'nurse license, license Certificate,
                  education completion' with nurse's license number
                </li>
                <li className="text-base lg:text-lg">
                  {"*"} If it is difficult to attach a file, please send the
                  relevant document by e-mail or fax, and we will verify and
                  process your membership.
                </li>
                <li className="text-base lg:text-lg">
                  {"*"} For the other inquiries, please call 031-427-3851 :)
                </li>
              </ul>
            </div>

            <h3 className="text-base lg:text-2xl lg:pl-10 pt-10 sm:pl-0">
              Etc. Personal Settings
            </h3>
            <div className="mt-1">
              <div className="border border-gray-400">
                <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                  <h5 className="mb-0 py-5 bg-slate-200 md:w-[310px] text-base lg:text-lg">
                    Mail agree
                  </h5>
                  <div className="my-auto">
                    <div className="flex sm:flex-wrap w-[20%] h-[20%] md:w-full ml-10 mx-auto">
                      <InputField
                        type="radio"
                        name="mail agree"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="mail agree"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                  <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                    SMS agree
                  </h5>
                  <div className="text-center my-auto">
                    <div className="flex sm:flex-wrap w-[20%] h-[20%] md:w-full ml-10 mx-auto">
                      <InputField
                        type="radio"
                        name="sms agree"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="sms agree"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </div>
                </div>
                <div className="sm:grid grid-cols-2 text-center border border-gray-400">
                  <h5 className="mb-0 py-5 md:w-[310px] bg-slate-200 text-base lg:text-lg">
                    Privacy Open
                  </h5>
                  <div className="my-auto">
                    <div className="flex sm:flex-wrap w-[10%] h-[10%] md:w-full ml-10 mx-auto">
                      <InputField
                        type="radio"
                        name="Privacy Open"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="Privacy Open"
                        placeholder={""}
                        className="my-2 p-[0.75rem] w-5 h-5  pr-0 pl-0 pb-1"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-10 flex justify-center">
              <Button className="btn">Register</Button>
              <Button className="btn" variant="danger">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
