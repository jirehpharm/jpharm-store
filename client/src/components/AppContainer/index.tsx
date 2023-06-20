import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import Checkout from "../../pages/Checkout";
import Cart from "../../pages/Cart";
import OrderTrackingPage from "../../pages/OrderTrackingPage";
import About from "../../pages/About";
import MyAccount from "../../pages/MyAccount";
import Wishlist from "../../pages/Wishlist";
import Faqs from "../../pages/Faqs";
import Contact from "../../pages/Contact";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermsAndConditions from "../../pages/TermsAndConditions";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
