import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";

export default function ForgotPassword() {
  return (
    <div className="max-w-[700px]">
      <h3 className="py-5 pl-3 border-b-2 text-lg md:text-2xl">Find member information</h3>
      <form action="#" className="my-4">
        <div className="py-3">
          <p className="pl-3 mb-2 text-sm lg:text-lg">Put your email that you filled when registered</p>
          <p className="pl-3 mb-2 text-sm lg:text-lg">We will send ID and password to your email</p>
        </div>
        <div className="sm:pl-3 sm:flex space-x-2 items-center">
          <p className="mb-2 lg:text-xl">E-mail</p>
          <InputField
            placeholder={""}
            type="email"
            required={true}
            className="h-[50px] min-w-[100px] sm:w-[400px] ml-0 sm:pl-3"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" variant="default">
            Done
          </Button>
          <Button variant="light">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
