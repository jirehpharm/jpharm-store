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
    Icon: RiMailFill
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password*",
    required: true,
    Icon: MdPassword
  }
];

export default function Login() {
  const { handleLoginSubmit } = useLogin();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <BreadcrumbBanner title="Login" />
      <div className="max-w-lg lg:max-w-4xl xl:max-w-6xl mx-auto p-4">
        <div className="my-20 grid lg:grid-cols-2 items-center gap-16">
          <div className="border border-gray-50 drop-shadow-sm drop-shadow-[0px_3px_16px_rgba(39, 28, 145, 0.07)] flex flex-col items-center p-4">
            {isLoggedIn ? (
              <Layout
                title={"Already Logged In"}
                subtitle={"Click Logout to go back to the login page. "}
              >
                <div className="w-full sm:w-[80%]">
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
                subtitle={"Please fill login information"}
              >
                <div className="w-full sm:w-[80%] lg:w-[90%]">
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
                        className="h-[50px] w-full filter-none"
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
                      <button
                        className="w-full text-secondary p-4 border-2 border-secondary hover:text-white hover:bg-secondary"
                        type="submit"
                      >
                        SIGN IN
                      </button>
                    </div>
                  </form>
                  <div className="mt-10 text-center">
                    <p className="px-4 text-light">
                      Don't have account?
                      <a href="/register" className="text-light">
                        &nbsp; Register
                      </a>
                    </p>
                  </div>
                  <div className="text-center"></div>
                </div>
              </Layout>
            )}
          </div>
          <div className="">
            <img
              src="/img/login/login_image.png"
              className="hidden lg:block object-contain"
              alt="login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
