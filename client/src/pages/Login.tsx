import "../style/index.css";
import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";
import Layout from "../components/Common/Layout";

export default function Login() {
  const fields = [
    { name: "email", type: "email", placeholder: "Email*", required: true },
    {
      name: "password",
      type: "password",
      placeholder: "Password*",
      required: true,
    },
  ];
  return (
    <Layout
      title={"Sign In To Your Account"}
      subtitle={"Please enter your email and password to access your account."}
    >
      <div className="sm:w-full lg:w-[40%]">
        <form action="#">
          {fields.map((field, index) => (
            <InputField
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="mb-4 h-[50px] w-full"
            />
          ))}
          <div className="flex justify-between items-center">
            <Button type="submit">SIGN IN</Button>
            <a href="/forgot-password" className="">
              <small>Forgot Password?</small>
            </a>
          </div>
        </form>

        <div className="mt-10 relative text-center">
          <p className="z-[20] relative inline-block bg-white px-4 text-light">
            DON'T HAVE AN ACCOUNT?
          </p>
          <span className="w-full bg-transparent sm:block h-[0.5px] border border-gray-200 absolute top-4 z-[1] hidden"></span>
        </div>
        <div className="text-center">
          <a href="/register" className="border border-secondary p-4">
            Create Account
          </a>
        </div>
      </div>
    </Layout>
  );
}
