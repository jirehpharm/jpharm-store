import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/App.css";
import AppContainer from "./components/AppContainer";
import ContactNav from "./components/ContactNav";
import PrimaryNav from "./components/PrimaryNav";
import Footer from "./components/Footer";
import CTC from "./components/CTC";

function App() {
  return (
    <>
      <ContactNav />
      <PrimaryNav />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
      <CTC />
      <Footer />
    </>
  );
}

export default App;
