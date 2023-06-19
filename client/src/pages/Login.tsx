import "../style/index.css";
import Button from "../components/Common/Button";
import Heading from "../components/Common/Heading";
import { InputField } from "../components/Form/InputField";

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

  const pDescription =
    "Add items to your wishlistget personalised recommendations check out more quickly track your orders register";
  return (
    <>
      <section className="section-title text-center space-y-20">
        <Heading
          title="Sign In To Your Account"
          subtitle="Please enter your email and password to access your account."
        />
        <div className="grid lg:grid-cols-2 gap-20 md:max-w-xl lg:max-w-6xl mx-auto">
          <div className="px-10">
            <form action="#">
              {fields?.map((field, index) => (
                <InputField
                  key={index}
                  className="block border-2  border-borderColor focus:border-secondary focus-visible:outline-0 bg-white w-full p-5 mb-4"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ))}
              <div className="flex flex-row">
                <Button type="submit" className="btn">
                  SIGN IN
                </Button>
              </div>
              <div className="mt-5 flex ">
                <a href="#" className="text-xs md:text-sm lg:text-base">
                  <small>FORGOTTEN YOUR PASSWORD?</small>
                </a>
              </div>
            </form>
          </div>
          <div className="sm:p-4 p-4">
            <h4 className="sm:text-base">DON'T HAVE AN ACCOUNT?</h4>
            <p className="text-light p-2 mb-5 sm:text-sm lg:text-base">
              {pDescription}
            </p>
            <div>
              <a href="/register" className="btn">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-16"></div>
    </>
  );
}
