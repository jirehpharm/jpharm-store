import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";
import Products from "../../pages/Products";
import ForgotPassword from "../../pages/ForgotPassword";
import ProductDetails from "../../pages/ProductDetails";
import Login from "../../pages/Login";
import Checkout from "../../pages/Checkout";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
