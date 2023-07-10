import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import SecondaryNav from "./components/Common/SecondaryNav";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import { AuthContext } from "./context/authContext";

import "./style/App.css";
import ConventionalNav from "./components/Common/SecondaryNav/ConventionalNav";
import { navbarData } from "./components/Common/SecondaryNav/content";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <ContactNav />
                <PrimaryNav />
                <SecondaryNav />
                <ConventionalNav navbarData={navbarData} />
                <AppContainer />
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
