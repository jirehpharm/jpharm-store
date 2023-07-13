import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import SecondaryNav from "./components/Common/SecondaryNav";
import Bank from "./components/Common/BankAndDownload";
import NavbarHidden from "./components/Common/NavBar/NavbarHidden";
import Stats from "./components/Common/Stats";
import NavbarContact from "./components/Common/NavBar/NavbarContact";
import ConventionalNav from "./components/Common/SecondaryNav/ConventionalNav";
import NavbarPrimary from "./components/Common/NavBar/NavbarPrimary";
import { AuthContext } from "./context/authContext";
import { bankData } from "./components/Common/BankAndDownload/constants";
import { statsData } from "./components/Common/Stats/constants";
import { navbarData } from "./components/Common/SecondaryNav/content";
import { PrimaryNavData } from "./components/Common/NavBar/content";
import "./style/App.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("isLoggedIn: ", isLoggedIn);
  ;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>{window.location.pathname === "/"
                ?
                <>
                  <ContactNav />
                  <PrimaryNav />
                  <SecondaryNav />
                  <ConventionalNav navbarData={navbarData} />
                </>
                :
                <>
                  <NavbarContact />
                  <NavbarPrimary navbarData={PrimaryNavData} />
                  <NavbarHidden navbarData={PrimaryNavData} />
                </>}
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
