import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import CTA from "./components/Common/CTA";
import "./style/App.css";
import SecondaryNav from "./components/Common/SecondaryNav";

function App() {
  return (
    <>
      <ContactNav />
      <PrimaryNav />
      <SecondaryNav />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
