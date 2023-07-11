import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiMailFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

import { InputField } from "../components/Form/InputField";
import Layout from "../components/Common/Layout";
import "../style/index.css";

import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "../context/authContext";
import BreadcrumbBanner from "../components/Common/BreadcrumbBanner";
import Modal from "../components/Modal";
import ForgotPassword from "./ForgotPassword";
import Widgets from "../components/Products/Details/Widgets";

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
    <div>
      <BreadcrumbBanner title="Login" />
      <div className="max-w-5xl mx-auto">
        <div className="my-20 grid xl:grid-cols-8">
          <div className="xl:col-span-3">
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
                title={"Login"}
                subtitle={
                  "Please fill login information"
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
                      />
                    ))}
                    <Modal
                      ModalTrigger={
                        <Widgets tittle={"ID or password forgot?"} />
                      }
                      ModalTitle={<></>}
                      ModalContent={<ForgotPassword />}
                    />
                    <div>
                      <button className="w-full text-secondary p-4 border-2 border-secondary hover:text-white hover:bg-secondary" type="submit">SIGN IN</button>
                    </div>
                  </form>
                  <div className="mt-10 relative text-center">
                    <p className="z-[20] relative inline-block bg-white px-4 text-light">
                      Don't have account?
                      <a href="/register" className="text-light">
                        &nbsp; Register
                      </a>
                    </p>
                  </div>
                  <div className="text-center">
                  </div>
                </div>
              </Layout>
            )}
          </div>
          <div></div>
          <div className="xl:col-span-4">
            <img src="/img/login/login_image.png" className="mt-14 hidden xl:block" alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
