import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";
import ForgotPassword from "../../pages/ForgotPassword";
import ProductDeatils from "../../pages/ProductDeatils";
import Login from "../../pages/Login";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details" element={<ProductDeatils />} />
      </Route>
    </Routes>
  );
}
