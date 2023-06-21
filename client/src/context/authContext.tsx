import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const token = localStorage.getItem("token") as string;
const expiresIn = localStorage.getItem("expiresIn") as string;

const clearLoginSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("expiresIn");
};

const addLoginSession = (data: {
  token: string;
  user: any;
  expiresIn: string;
}) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("expiresIn", data.expiresIn);
};

if (token) {
  const isExpired = parseInt(expiresIn) < Date.now() / 1000;
  if (isExpired) {
    initialState.user = null;
    initialState.isLoggedIn = false;
    clearLoginSession();
  } else {
    const { data } = jwtDecode(token) as { data: string };
    initialState.user = JSON.parse(data);
    initialState.isLoggedIn = true;
  }
}

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: (_userData: any) => {},
  logout: () => {},
});

function authReducer(
  state: { user: any | null; isLoggedIn: boolean },
  action: { type: string; payload?: any }
): { user: any | null; isLoggedIn: boolean } {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: any) => {
    addLoginSession(userData);
    dispatch({
      type: "LOGIN",
      payload: userData.user,
    });
  };

  const logout = () => {
    clearLoginSession();
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }} {...props} />
  );
}

export { AuthContext, AuthProvider };
