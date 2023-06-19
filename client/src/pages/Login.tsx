import "../style/index.css";
import Button from "../components/Common/Button";
import Heading from "../components/Common/Heading";
import { InputField } from "../components/Form/InputField";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Layout from "../components/Common/Layout";

const GET_USER = gql`
  query Query($email: String) {
    getCustomerByIdOrEmail(email: $email) {
      full_name
      password
      email
      status
    }
  }
`;

export default function Login() {
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });
  const fields = [
    { name: "email", type: "email", placeholder: "Email*", required: true },
    {
      name: "password",
      type: "password",
      placeholder: "Password*",
      required: true,
    },
  ];

  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_USER, {
    variables: { email: loginInputs?.email },
    skip: loginInputs?.email === "",
  });
    console.log("color: ~ userData:", userData)
  console.log("color: ~ loading:", loading);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginInputs({
      email,
      password,
    });
  };

  return (
    <Layout
      title={"Sign In To Your Account"}
      subtitle={"Please enter your email and password to access your account."}
    >
      <div className="sm:w-full lg:w-[40%]">
        <form action="#" onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <InputField
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="mb-4 h-[50px] w-full"
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
  );
}
