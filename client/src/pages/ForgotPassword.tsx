import { RiMailFill } from "react-icons/ri";
import Button from "../components/Common/Button";
import Layout from "../components/Common/Layout";
import { InputField } from "../components/Form/InputField";

export default function ForgotPassword() {
  return (
    <Layout
      title={"Forgot your password? No worries!"}
      subtitle={
        "Enter your email address. We'll send you a link to reset your password, if you have already registered with us."
      }
    >
      <div className=" sm:w-full lg:w-[470px]">
        <form action="#" className="ltn__form-box contact-form-box">
          <InputField
            placeholder={"abc@abc.com"}
            type="email"
            required={true}
            className="h-[50px] w-full"
            Icon={RiMailFill}
          />
          <div className="flex justify-center mt-4">
            <Button type="submit" variant="default">
              SUBMIT
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-grey-dark mt-2">
          <p className="text-light text-base">
            Back to <a href="/login">Sing in</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
