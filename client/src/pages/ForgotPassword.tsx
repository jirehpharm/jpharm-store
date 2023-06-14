import Button from "../components/Common/Button";
import Heading from "../components/Common/Heading";

export default function ForgotPassword() {
  return (
    <section className="mx-auto max-w-6xl flex flex-col items-center py-10">
      <Heading
        title="Forgot your password? No worries!"
        subtitle="Enter your email address. We'll send you a link to reset your password, if you have already registered with us."
      />
      <div className="w-[470px]">
        <form action="#" className="ltn__form-box contact-form-box">
          <input
            className="block border-2 border-borderColor focus:border-secondary focus-visible:outline-0 bg-white w-full p-5 mb-4"
            type="email"
            placeholder={`abc@abc.com`}
          />
          <div className="flex justify-center">
            <Button type="submit" variant="default">
              SUBMIT
            </Button>
          </div>
          
        </form>
        <br />
        <div className="text-center text-sm text-grey-dark mt-4">
          <p>Back to <a href="/login">Sing in</a></p>
        </div>
      </div>
    </section>
  );
}