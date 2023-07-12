import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import SecondaryNav from "./components/Common/SecondaryNav";
import { AuthContext } from "./context/authContext";
import Bank from "./components/Common/BankAndDownload";
import { bankData } from "./components/Common/BankAndDownload/constants";
import Stats from "./components/Common/Stats";
import { statsData } from "./components/Common/Stats/constants";

import "./style/App.css";
import ConventionalNav from "./components/Common/SecondaryNav/ConventionalNav";
import { navbarData } from "./components/Common/SecondaryNav/content";
import Login from "./pages/Login";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <>
              <ContactNav />
              <PrimaryNav />
              <SecondaryNav />
              <ConventionalNav navbarData={navbarData} />
              <Login />
              <Stats stats={statsData} />
              <Footer />
            </>
          } />
          <Route
            path="*"
            element={
              <>
                <ContactNav />
                <PrimaryNav />
                <SecondaryNav />
                <ConventionalNav navbarData={navbarData} />
                <AppContainer />
                <Bank stats={bankData} />
                <Stats stats={statsData} />
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
