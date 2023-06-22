import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiMailFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";
import Layout from "../components/Common/Layout";
import "../style/index.css";

import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "../context/authContext";

const fields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email*",
    required: true,
    Icon: RiMailFill,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password*",
    required: true,
    Icon: MdPassword,
  },
];

export default function Login() {
  const { handleLoginSubmit } = useLogin();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {isLoggedIn ? (
        <Layout
          title={"Already Logged In"}
          subtitle={"Click Logout to go back to the login page. "}
        >
          <div className="sm:w-full lg:w-[470px]">
            <div className="text-center">
              <div
                className="border border-secondary p-4 cursor-pointer"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout
          title={"Sign In To Your Account"}
          subtitle={
            "Please enter your email and password to access your account."
          }
        >
          <div className="sm:w-full lg:w-[470px]">
            <form
              action="#"
              onSubmit={handleLoginSubmit}
              className="flex flex-col space-y-4"
            >
              {fields.map((field, index) => (
                <InputField
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="h-[50px] w-full"
                  Icon={field.Icon}
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
      )}
    </>
  );
}
