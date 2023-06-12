import Button from "../components/Common/Button";
import Heading from "../components/Common/Heading";

/**
 * Renders a registration form with input fields for first name, last name, email, password, and confirm password.
 *
 * @return {JSX.Element} The JSX element representing the register form
 */
export default function Register(): JSX.Element {
  const fields = [
    { name: "First Name", type: "text" },
    { name: "Last Name", type: "text" },
    { name: "Email", type: "text" },
    { name: "Password", type: "password" },
    { name: "Confirm Password", type: "password" },
  ];

  return (
    <section className="mx-auto max-w-6xl flex flex-col items-center py-10">
      <Heading
        title="Create an Account"
        subtitle="Sign up for our service to access exclusive content and features."
      />

      <div className="w-[470px]">
        <form action="#" className="ltn__form-box contact-form-box">
          {fields.map(({ name, type }, index) => (
            <input
              key={index}
              className="block border-2 border-borderColor focus:border-secondary focus-visible:outline-0 bg-white w-full p-5 mb-4"
              type={type}
              name={name}
              placeholder={name}
            />
          ))}
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="ml-3 text-sm">
              <label>
                I consent to Gerbil processing my personal data in order to send
                personalized marketing material in accordance with the consent
                form and the privacy policy.
              </label>
            </div>
          </div>
          <br />
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="ml-3 text-sm">
              <label>I consent to the privacy policy.</label>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <Button type="submit" variant="default">
              CREATE ACCOUNT
            </Button>
          </div>
        </form>
        <br />
        <div className="text-center text-sm text-grey-dark mt-4">
          <p>By creating an account, you agree to our:</p>
          <br />
          <p>
            <a href="#">
              TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY POLICY
            </a>
          </p>
          <div className="go-to-btn mt-50">
            <a href="/login">ALREADY HAVE AN ACCOUNT ?</a>
          </div>
        </div>
      </div>
    </section>
  );
}
