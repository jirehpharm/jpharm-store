import { InputField } from "../../Form/InputField";
import BreadcrumbBanner from "../BreadcrumbBanner";
import Button from "../Button";

export default function EditcompanyUser() {
  return (
    <div>
      <BreadcrumbBanner title="Edit Member Information" />
      <div className="my-24 max-w-md mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="mt-10 pt-10 pl-5 md:pl-10">
          <h3 className="text-base lg:text-2xl sm:pl-0">
            Enter site usage information
          </h3>
        </div>
        <div className="mt-1 pl-5 lg:pl-10">
          <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
            <h5 className="bg-[#F2F2F2] text-sm md:text-base lg:text-lg py-5 mb-0 p-2 my-auto">
              Membership type
            </h5>
            <div className="text-center mx-auto md:text-left text-sm md:text-base lg:text-lg my-auto md:pl-10 text-primary">
              <strong>company Member</strong>
            </div>
          </div>

          <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
            <h5 className="bg-[#F2F2F2] py-5 mb-0 text-sm md:text-base lg:text-lg">
              ID
            </h5>
            <div className="w-[80%] md:w-[50%] mx-auto my-2">
              <InputField
                type="text"
                name="id"
                placeholder={""}
                className="mt-2 h-[23px] w-[117px] bg-[#ECECEC]"
              />
            </div>
          </div>

          <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
            <h5 className="bg-[#F2F2F2] mb-0 py-5 text-sm md:text-base lg:text-lg">
              Password
            </h5>
            <div className="w-[80%] md:w-[50%] mx-auto my-2">
              <InputField
                type="text"
                name="password"
                placeholder={""}
                className="mt-2 h-[23px] w-[117px] bg-[#ECECEC]"
              />
            </div>
          </div>

          <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
            <h5 className=" bg-[#F2F2F2] mb-0 py-5 text-sm md:text-base lg:text-lg">
              Password Check
            </h5>
            <div className="w-[80%] md:w-[50%] mx-auto">
              <InputField
                type="text"
                name="passwordCheck"
                placeholder={""}
                className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-10 pl-5 md:pl-10">
          <h3 className="text-base lg:text-2xl sm:pl-0">
            Enter member information
          </h3>
          <div className="mt-1">
            <div className="border border-[#D6D6D6]">
              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className=" bg-[#F2F2F2] mb-0 py-5 text-sm md:text-base lg:text-lg">
                  name
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="name"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6] lg:space-x-16">
                <h5 className="bg-[#F2F2F2]  mb-0 py-5 text-sm md:text-base lg:text-lg">
                  Email
                </h5>
                <div className="col-span-1 md:col-span-2 w-[80%] sm:w-[70%] mx-auto">
                  <InputField
                    type="email"
                    name="email"
                    placeholder={""}
                    className="my-2 h-[23px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className=" md:grid grid-cols-4 text-center border border-[#D6D6D6] lg:space-x-16">
                <h5 className="bg-[#F2F2F2]  mb-0 py-5 text-sm md:text-base lg:text-lg">
                  Tax invoice issuance email
                </h5>
                <div className="md:col-span-2 w-[80%] md:w-[70%] mx-auto">
                  <InputField
                    type="text"
                    name="taxInvoiceEmail"
                    placeholder={""}
                    className="my-2 h-[23px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  Telephone Number
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="telephoneNumber"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  phone Number
                </h5>
                <div className=" w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="phoneNumber"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  company Name
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="companyName"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px]  bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5 bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  company Original Number
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="number"
                    name="companyOriginalNumber"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  Representative Name
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="representativeName"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>

              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5 text-sm md:text-base lg:text-lg  bg-[#F2F2F2]">
                  Department
                </h5>
                <div className="w-[80%] md:w-[50%] mx-auto">
                  <InputField
                    type="text"
                    name="department"
                    placeholder={""}
                    className="my-2 h-[23px] w-[117px] bg-[#ECECEC]"
                  />
                </div>
              </div>
              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6] space-x-1">
                <h5 className="mb-0 py-5 md:py-20  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  Address
                </h5>

                <div className="lg:flex flex-wrap">
                  <div className="relative w-[80%] md:w-[50%] pl-3 md:pl-10 lg:pl-[74px]">
                    <InputField
                      type="text"
                      name="address"
                      placeholder={""}
                      className="my-2 h-[22.64px] w-[120px] bg-[#ECECEC]"
                    />
                  </div>
                  <div className="lg:absolute pl-3 md:pl-10 lg:ml-36 lg:pl-20 flex">
                    <Button className="btn h-11 my-2 mb-0 text-center">
                      Address
                    </Button>
                    <Button className="btn my-2 h-11 mb-0 text-center">
                      Search
                    </Button>
                  </div>
                  <div className="w-[80%] md:w-[50%] mx-auto lg:mx-10 lg:pl-[28px]">
                    <div className="flex items-center ">
                      <InputField
                        type="text"
                        name="basedAddress"
                        placeholder="Based Address"
                        className="my-2 h-[23px] w-[150px] sm:w-[200px] md:w-[305.59px] bg-[#ECECEC]"
                      />
                      <h5 className="w-40 flex pr-2 my-auto text-sm md:text-base lg:text-base md:whitespace-nowrap pl-4">
                        Based Address
                      </h5>
                    </div>
                  </div>
                  <div className="w-[80%] md:w-[50%] mx-auto lg:mx-10 lg:pl-[28px]">
                    <div className="flex items-center">
                      <InputField
                        type="text"
                        name="detailedAddress"
                        placeholder="Detailed Address"
                        className="my-2 h-[23px] w-[150px] sm:w-[200px] md:w-[305.59px] bg-[#ECECEC]"
                      />
                      <h5 className="w-40 pr-2 my-auto text-sm md:text-base lg:text-base lg:whitespace-nowrap pl-4">
                        detailed Address
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
              <h5 className="mb-0 py-5 bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                Business Registeration
              </h5>
              <div className="flex p-2">
                <div className="pl-2 border border-slate-200 h-[40px] mx-auto my-auto md:ml-8 lg:ml-16 bg-[#ECECEC]">
                  <label htmlFor="fileInput" className="file-label">
                    <span className="">Attachment</span>
                    <InputField
                      type="file"
                      name="businessRegisteration"
                      className=" h-[23px] w-[116.27px] my-auto pt-2 opacity-0 top-[-34px]"
                      placeholder={""}
                    />
                  </label>
                </div>{" "}
              </div>
            </div>

            <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
              <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                Nurse Certificate Number
              </h5>
              <div className="flex p-2">
                <div className="pl-2 border border-slate-200 h-[40px] mx-auto my-auto md:ml-8 lg:ml-16 bg-[#ECECEC]">
                  <label htmlFor="fileInput" className="file-label">
                    Attachment
                    <InputField
                      type="file"
                      name="nurseCertificateNumber"
                      className="my-2 h-[23px] w-[116.27px] pt-2 opacity-0  top-[-34px]"
                      placeholder={""}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
              <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                Etc.,
              </h5>
              <div className="flex p-2">
                <div className="pl-2 border border-slate-200 h-[40px] mx-auto my-auto md:ml-8 lg:ml-16 bg-[#ECECEC]">
                  <label htmlFor="fileInput" className="file-label">
                    <span className="">Attachment</span>
                    <InputField
                      type="file"
                      name="etc."
                      className=" h-[23px] w-[116.27px] my-auto pt-2 opacity-0 top-[-34px]"
                      placeholder={""}
                    />
                  </label>
                </div>{" "}
              </div>
              <div className="pl-10 md:pl-10 my-auto text-center p-2">
                <Button className="btn h-12 w-36">Add</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#F2F2F2]">
            <ul className="p-4">
              <li className="text-sm md:text-base lg:text-lg">
                {"*"} Please attach 'nurse license, license Certificate,
                education completion' with nurse's license number
              </li>
              <li className="text-sm md:text-base lg:text-lg">
                {"*"} If it is difficult to attach a file, please send the
                relevant document by e-mail or fax, and we will verify and
                process your membership.
              </li>
              <li className="text-sm md:text-base lg:text-lg">
                {"*"} For the other inquiries, please call 031-427-3851 :)
              </li>
            </ul>
          </div>

          <h3 className="text-base lg:text-2xl pt-10 sm:pl-0">
            Other Personalization
          </h3>
          <div className="mt-1">
            <div className="border border-[#D6D6D6]">
              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5 bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  Mail agree
                </h5>
                <div className="my-auto mx-auto">
                  <div className="flex w-[20%] h-[20%] md:w-full ml-10 mx-auto">
                    <input
                      type="radio"
                      name="mailAgree"
                      placeholder={""}
                      className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                    />
                    <label className="pl-2 pr-3 my-auto">Yes</label>
                    <input
                      type="radio"
                      name="mailAgree"
                      placeholder={""}
                      className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                    />
                    <label className="pl-2 my-auto">No</label>
                  </div>
                </div>
              </div>
              <div className="md:grid grid-cols-4 text-center border border-[#D6D6D6]">
                <h5 className="mb-0 py-5  bg-[#F2F2F2] text-sm md:text-base lg:text-lg">
                  SMS agree
                </h5>
                <div className="text-center my-auto mx-auto">
                  <div className="flex w-[20%] h-[20%] md:w-full ml-10 mx-auto">
                    <input
                      type="radio"
                      name="smsAgree"
                      placeholder={""}
                      className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                    />
                    <label className="pl-2 pr-3 my-auto">Yes</label>
                    <input
                      type="radio"
                      name="smsAgree"
                      placeholder={""}
                      className="my-2 p-[0.75rem] pr-0 pl-0 pb-1"
                    />
                    <label className="pl-2 my-auto">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-10 flex justify-center pb-[50%]">
            <Button className="btn">Save</Button>
            <Button className="btn" variant="danger">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
