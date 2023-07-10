import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";

export default function CompanyRegister() {
  return (
    <div>
      <BreadcrumbBanner title="Company Register" />
      <div className="my-24 max-w-6xl mx-auto">
        <h3>Websiter User Information Register</h3>
        <div className="mt-1">
          <table className="border border-gray-400 w-[1175px] h-[203px]">
            <tr className="text-center border border-gray-400 my-3">
              <td className=" border border-gray-400 bg-slate-200 w-[320px] p-2">
                Type of User
              </td>
              <td className="text-left pl-10">Company Member</td>
            </tr>
            <tr className="text-center border border-gray-400">
              <td className=" border border-gray-400 bg-slate-200">ID</td>
              <td className="border border-gray-400 text-left pl-10 p-2">
                English,number._ only available, You need to put more than 3
                <div className="w-[52%]">
                  <InputField
                    type="text"
                    name="ID"
                    placeholder="ID"
                    className="mb-2 h-[50px] w-full"
                  />
                </div>
              </td>
            </tr>
            <tr className="text-center border border-gray-400">
              <td className=" border border-gray-400 bg-slate-200">
                Password*
              </td>
              <td className="">
                <div className="w-[50%] ml-10">
                  <InputField
                    type="text"
                    name="Password"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </td>
            </tr>
            <tr className="text-center border border-gray-400">
              <td className=" border border-gray-400 bg-slate-200">
                Password Check*
              </td>
              <td className="">
                <div className="w-[50%] ml-10">
                  <InputField
                    type="text"
                    name="Password Check"
                    placeholder={""}
                    className="my-2 h-[50px] w-full"
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="mt-10 pt-10">
          <h3>User Information</h3>
          <div className="mt-1">
            <table className="border border-gray-400 w-[1175px] h-[203px]">
              <tr className="text-center border border-gray-400 py-3">
                <td className=" border border-gray-400 bg-slate-200">Name*</td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="text"
                      name="Type of User"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">Email</td>
                <td className="border border-gray-400 text-left">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="email"
                      name="Email"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Email for Tax
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="text"
                      name="Email for Tax"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Telephone Number
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="number"
                      name="Telephone Number"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  phone Number
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="number"
                      name="phone Number"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Company Name
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="text"
                      name="Company Name"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Company Register Number
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="number"
                      name="Company Original Number"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Representative Name
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="text"
                      name="Representative Name"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Department
                </td>
                <td className="py-2">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="text"
                      name="Department"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                  </div>
                </td>
              </tr>

              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Address
                </td>
                <td className="">
                  <div className="flex ml-10">
                    <InputField
                      type="text"
                      name="Address"
                      placeholder={""}
                      className="my-2 h-[50px] w-full"
                    />
                    <div className="flex mr-3">
                      <Button className="btn h-12 ml-10 my-2">
                        Address Search
                      </Button>
                    </div>
                  </div>
                  <div className="flex ml-10">
                    <InputField
                      type="text"
                      name="Based Address"
                      placeholder={""}
                      className="my-2 h-[50px] w-[135%]"
                    />{" "}
                    <span className="my-auto pl-28">Based Address</span>
                  </div>
                  <div className="flex w-full ml-10">
                    <InputField
                      type="text"
                      name="Detailed Address"
                      placeholder={""}
                      className="my-2 h-[50px] w-[135%]"
                    />{" "}
                    <span className="my-auto pl-28">Detailed Address</span>
                  </div>
                </td>
              </tr>

              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Business Register
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="file"
                      name="Representative Name"
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">
                  Nurse Certificate Number
                </td>
                <td className="">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="file"
                      name="Representative Name"
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                </td>
              </tr>
              <tr className="text-center border border-gray-400">
                <td className=" border border-gray-400 bg-slate-200">Etc.,</td>
                <td className="flex">
                  <div className="w-[50%] ml-10">
                    <InputField
                      type="file"
                      name="Etc."
                      placeholder={""}
                      className="my-2 h-[50px] w-full pt-2"
                    />
                  </div>
                  <Button className="btn h-12 my-2 ml-20">Add</Button>
                </td>
              </tr>
            </table>

            <div className="mt-10 bg-slate-200">
              <ul className="p-4">
                <li>
                  {"*"} Please attach 'nurse license, license Certificate,
                  education completion' with nurse's license number
                </li>
                <li>
                  {"*"} If it is difficult to attach a file, please send the
                  relevant document by e-mail or fax, and we will verify and
                  process your membership.
                </li>
                <li>
                  {"*"} For the other inquiries, please call 031-427-3851 :)
                </li>
              </ul>
            </div>

            <h3 className="mt-10">Etc Personal Setting</h3>
            <div className="mt-1">
              <table className="border border-gray-400 w-[1175px] h-[203px]">
                <tr className="text-center border border-gray-400 my-3 ">
                  <td className=" border border-gray-400 bg-slate-200 w-[320px]">
                    Mail agree
                  </td>
                  <td className="text-left pl-10">
                    <div className="flex w-full ml-10">
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </td>
                </tr>
                <tr className="text-center border border-gray-400 my-3">
                  <td className=" border border-gray-400 bg-slate-200">
                    SMS agree
                  </td>
                  <td className="text-left pl-10">
                    <div className="flex w-full ml-10">
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </td>
                </tr>
                <tr className="text-center border border-gray-400 my-3">
                  <td className=" border border-gray-400 bg-slate-200">
                    Privacy Open
                  </td>
                  <td className="text-left pl-10">
                    <div className="flex ml-10">
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 pr-3 my-auto">Yes</label>
                      <InputField
                        type="radio"
                        name="Department"
                        placeholder={""}
                        className="my-2 p-[0.75rem] pr-1 pl-0 pb-2"
                      />
                      <label className="pl-2 my-auto">No</label>
                    </div>
                  </td>
                </tr>
              </table>
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
