import Button from "../components/Common/Button";
import Layout from "../components/Common/Layout";
import Checkbox from "../components/Form/Checkbox";
import { InputField } from "../components/Form/InputField";

/**
 * Renders a registration form with input fields for first name, last name, email, password, and confirm password.
 *
 * @return {JSX.Element} The JSX element representing the register form
 */
export default function Register(): JSX.Element {
  const fields = [
    { name: "First Name", type: "text", placeholder: "First Name" },
    { name: "Last Name", type: "text", placeholder: "Last Name" },
    { name: "Email", type: "email", placeholder: "Email*", required: true },
    {
      name: "Password",
      type: "password",
      placeholder: "Password*",
      required: true,
    },
    {
      name: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password*",
      required: true,
    },
  ];

  return (
    <Layout
      title={"Create an Account"}
      subtitle={
        "Sign up for our service to access exclusive content and features."
      }
    >
      <div className="sm:w-full lg:w-[470px]">
        <form action="#">
          {fields.map(({ name, type, placeholder, required }, index) => (
            <InputField
              key={index}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              className="mb-4 h-[50px] w-full"
            />
          ))}
          <div className="flex items-start my-3">
            <div className="flex items-center h-5">
              <Checkbox name={"consent"} id="consent" required={true} />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-light text-sm">
                I consent to Gerbil processing my personal data in order to send
                personalized marketing material in accordance with the consent
                form and the privacy policy.
              </label>
            </div>
          </div>
          <div className="flex items-start my-3">
            <div className="flex items-center h-5">
              <Checkbox name={"consent"} id="privacy" required={true} />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy" className="text-light text-sm">
                I consent to the privacy policy.
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="default">
              CREATE ACCOUNT
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-grey-dark mt-4">
          <p className="text-light">
            By creating an account, you agree to our:
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="/terms-of-conditions">TERMS OF CONDITIONS</a>{" "}
            <span className="text-secondary">|</span>
            <a href="/privacy-policy">PRIVACY POLICY</a>
          </div>
          <div className="my-3">
            <a href="/login">ALREADY HAVE AN ACCOUNT ?</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
