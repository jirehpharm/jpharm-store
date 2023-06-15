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
  return (
    <>
      <section className="section-title text-center space-y-20">
        <Heading
          title="Sign In To Your Account"
          subtitle="Please enter your email and password to access your account."
        />
        <div className="grid grid-cols-2 gap-20 max-w-6xl mx-auto">
          <div className="px-10">
            <form action="#">
              {fields.map((field, index) => (
                <InputField
                  key={index}
                  className="block border-2  border-borderColor focus:border-secondary focus-visible:outline-0 bg-white w-full p-5 mb-4"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              ))}
              <div>
                <Button type="submit">SIGN IN</Button>
              </div>
              <br />
              <div>
                <a href="#" className="">
                  <small>FORGOTTEN YOUR PASSWORD?</small>
                </a>
              </div>
            </form>
          </div>

          <div>
            <h4>DON'T HAVE AN ACCOUNT?</h4>
            <br />
            <p className="text-light">
              Add items to your wishlistget personalised recommendations <br />
              check out more quickly track your orders register
            </p>
            <br />
            <div>
              <a href="/register" className="btn">
                Create Account
              </a>
              <br />
            </div>
          </div>
        </div>
      </section>
      <div className="pb-16"></div>
    </>
  );
}
