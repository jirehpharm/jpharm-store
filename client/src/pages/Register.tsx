import Button from "../components/Common/Button";
import Layout from "../components/Common/Layout";
import Checkbox from "../components/Form/Checkbox";
import { InputField } from "../components/Form/InputField";
import { gql, useMutation } from "@apollo/client";
import { showErrorToast, showSuccessToast } from "../components/Toast/Toast";

/**
 * Renders a registration form with input fields for first name, last name, email, password, and confirm password.
 *
 * @return {JSX.Element} The JSX element representing the register form
 */

const fields = [
  { name: "firstName", type: "text", placeholder: "First Name" },
  { name: "lastName", type: "text", placeholder: "Last Name" },
  { name: "email", type: "email", placeholder: "Email*", required: true },
  {
    name: "password",
    type: "password",
    placeholder: "Password*",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password*",
    required: true,
  },
];

const REGISTER_CUSTOMER = gql`
  mutation Mutation($email: String!, $password: String!, $fullName: String!) {
    registerCustomer(email: $email, password: $password, fullName: $fullName) {
      email
    }
  }
`;

export default function Register(): JSX.Element {
  const [registerCustomer, { loading, error }] = useMutation(REGISTER_CUSTOMER);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (email) {
      const fullName = `${firstName} ${lastName}`;
      const isValidPassword = password === confirmPassword;
      if (!isValidPassword) {
        showErrorToast("Passwords do not match");
      } else {
        const { data } = await registerCustomer({
          variables: { email, password, fullName },
        });
        const isRegistered = data.registerCustomer;

        if (isRegistered === null) {
          showErrorToast("User already registered please login.");
        }
        if (error) {
          showErrorToast("Something went wrong");
        }
        showSuccessToast("Registration successful");
      }
    }
  };

  return (
    <Layout
      title={"Create an Account"}
      subtitle={"Sign up for our service to access exclusive content and features."}
    >
      <div className="sm:w-full lg:w-[470px]">
        <form action="#" onSubmit={handleSubmit}>
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
                I consent to Gerbil processing my personal data in order to send personalized
                marketing material in accordance with the consent form and the privacy policy.
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
            <Button type="submit" variant="default" isLoading={loading}>
              CREATE ACCOUNT
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-grey-dark mt-4">
          <p className="text-light">By creating an account, you agree to our:</p>
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
