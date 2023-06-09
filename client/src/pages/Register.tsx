import { startCase } from "lodash";
import Button from "../components/Common/Button";
import Heading from "../components/Common/Heading";
/**
 * Renders a registration form with input fields for first name, last name, email, password, and confirm password.
 *
 * @return {JSX.Element} The JSX element representing the register form
 */
export default function Register() {
  const fields = [
    { name: "firstName", type: "text" },
    { name: "lastName", type: "text" },
    { name: "email", type: "text" },
    { name: "password", type: "password" },
    { name: "confirmPassword", type: "password" },
  ];

  return (
    <section className="mx-auto max-w-6xl flex flex-col items-center py-10">
      <Heading
        heading="Register Your Account"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non distinctio vel iste."
      />
      <div className="w-[470px]">
        <form action="#" className="ltn__form-box contact-form-box">
          {fields.map((field, index) => (
            <input
              key={index}
              className="block border-2  border-[#E4ECF2] focus:border-[#0A9A73] focus-visible:outline-0 bg-white w-full p-5 mb-4"
              type={field.type}
              name={field.name}
              placeholder={startCase(field.name)}
            />
          ))}
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="ml-3 text-sm">
              <label>
                I consent to Gerbil processing my personal data in order to send personalized marketing material in accordance with the consent form
                and the privacy policy.
              </label>
            </div>
          </div>
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="ml-3 text-sm">
              <label>By clicking "create account", I consent to the privacy policy.</label>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <Button type="submit">CREATE ACCOUNT</Button>
          </div>
        </form>
        <br />
        <div className="text-center text-sm text-grey-dark mt-4">
          <p>By creating an account, you agree to our:</p>
          <br />
          <p>
            <a href="#">TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY POLICY</a>
          </p>
          <div className="go-to-btn mt-50">
            <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
          </div>
        </div>.
      </div>
    </section>
  );
}
