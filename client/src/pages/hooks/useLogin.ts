import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../components/Toast/Toast";
import { AuthContext } from "../../context/authContext";

const loginAuthUrl = `${import.meta.env.VITE_API_URL}/auth/login`;

/**
 * Hook to handle user login.
 * @returns Object with loginData and handleLoginSubmit function.
 */
export const useLogin = (): {
  loginData: { email: string; password: string };
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
} => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setLoginData({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
  };

  const verifyUserLogin = useCallback(async () => {
    // Check if both email and password are present in the `loginData` object
    if (loginData.email && loginData.password) {
      // Send a POST request to the `loginAuthUrl` with the `loginData` object as the request body
      const resp = await fetch(loginAuthUrl, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "Content-Type": "application/json" },
      });

      // Parse the JSON response from the server
      const loginResp = await resp.json();

      // If the login was successful
      if (loginResp.success) {
        authContext.login(loginResp);
        showSuccessToast("Login Successful");
        // Navigate to the home page
        navigate("/");
      } else {
        showErrorToast(loginResp.message);
      }
    }
  }, [loginData]);

  useEffect(() => {
    verifyUserLogin();
  }, [verifyUserLogin]);

  return {
    loginData,
    handleLoginSubmit,
  };
};
