import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Products from "../../pages/Products";
import ForgotPassword from "../../pages/ForgotPassword";
import ProductDetails from "../../pages/ProductDetails";
import Login from "../../pages/Login";
import Checkout from "../../pages/Checkout";
import Cart from "../../pages/Cart";
import OrderTrackingPage from "../../pages/OrderTrackingPage";
import About from "../../pages/About";
import MyAccount from "../../pages/MyAccount";
import Wishlist from "../../pages/Wishlist";
import Faqs from "../../pages/Faqs";
import Contact from "../../pages/Contact";
import PrivacyPolicy from "../../pages/PrivacyPolicy";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
        <Route path="/faq" element={<Faqs />} />
      </Route>
    </Routes>
  );
}
