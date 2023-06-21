import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { RiMailFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";
import { get } from "lodash";

import Button from "../components/Common/Button";
import { InputField } from "../components/Form/InputField";
import Layout from "../components/Common/Layout";
import "../style/index.css";

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

const VERIFY_CUSTOMER = gql`
  query VerifyCustomer($email: String!, $password: String!) {
    verifyCustomer(email: $email, password: $password) {
      customer_id
      email
      full_name
      group_id
      status
      uuid
    }
  }
`;

export default function Login({ setIsLoggedIn }: any) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const verifiedCustomer = useQuery(VERIFY_CUSTOMER, {
    variables: loginData,
    skip: loginData?.email === "" && loginData?.password === "",
  });

  useEffect(() => {
    const userData = get(verifiedCustomer, "data.verifyCustomer", null);
    if (userData) {
      sessionStorage.setItem("currentUser", JSON.stringify(userData));
      setIsLoggedIn(true);
    }
  }, [verifiedCustomer]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoginData({
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  return (
    <Layout
      title={"Sign In To Your Account"}
      subtitle={"Please enter your email and password to access your account."}
    >
      <div className="sm:w-full lg:w-[470px]">
        <form
          action="#"
          onSubmit={handleSubmit}
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
            <Button type="submit" isLoading={verifiedCustomer.loading}>
              SIGN IN
            </Button>
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
  );
}
