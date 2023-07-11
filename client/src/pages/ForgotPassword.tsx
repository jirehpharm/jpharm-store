import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";

export default function ForgotPassword() {
  return (
    <div>
      <h3 className="py-5 pl-3 border-b-2">Find member information</h3>
      <form action="#" className="my-4">
        <div className="py-3">
          <p className="pl-3 mb-2">Put your email that you filled when registered</p>
          <p className="pl-3 mb-2">We will send ID and password to your email</p>
        </div>
        <div className="pl-3 flex space-x-2 items-center">
          <p className="mb-0">E-mail</p>
          <InputField
            placeholder={""}
            type="email"
            required={true}
            className="h-[50px] w-[400px] pl-3"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button type="submit" variant="default">
            Done
          </Button>
          <Button type="submit" variant="light">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
