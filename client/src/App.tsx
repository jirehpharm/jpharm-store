import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import CTA from "./components/Common/CTA";
import SecondaryNav from "./components/Common/SecondaryNav";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import { AuthContext } from "./context/authContext";

import "./style/App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <ContactNav />
                <PrimaryNav />
                <SecondaryNav />
                {<AppContainer />}
                <CTA />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
