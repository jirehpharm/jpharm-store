import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";
import Products from "../../pages/Products";
import ForgotPassword from "../../pages/ForgotPassword";
import ProductDetails from "../../pages/ProductDetails";
import Login from "../../pages/Login";
import Checkout from "../../pages/Checkout";
import Cart from "../../pages/Cart";
import OrderTracking from "../OrderTracking/OrderTracking";
import { orderTracking } from "../OrderTracking/constant";

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
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/order-tracking"
          element={<OrderTracking order={orderTracking} />}
        />
      </Route>
    </Routes>
  );
}
