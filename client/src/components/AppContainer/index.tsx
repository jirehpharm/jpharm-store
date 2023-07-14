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
import ErrorPage from "../../pages/404";

import { apolloClient, gql } from "../../apolloClient";
import { useEffect, useState } from "react";
import Register from "../../pages/Register";
import SchoolRegister from "../../pages/SchoolRegister";
import CompanyRegister from "../../pages/CompanyRegister";
import Login from "../../pages/Login";
import MyPage from "../Common/MyPage/MyPage";
import EditCompanyUser from "../Common/MyPage/EditCompanyUser";
import EditSchoolUser from "../Common/MyPage/EditSchoolUser";
import CustomerInquiry from "../../pages/CustomerInquiry";

const GET_PRODUCTS = gql(`
  query ListProducts {
    listProducts {
      product_id
      uuid
      price
      qty
      visibility
      image
      status
      type
    }
  }
`);

export default function AppContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apolloClient
      .query({
        query: GET_PRODUCTS,
      })
      .then((res) => {
        console.log("res: ", res);
        setProducts(res.data.listProducts);
      });
  });

  console.log("products: ", products);

  return (
    <Routes>
      <Route>
        <Route path="/register" element={<Register />} />
        <Route path="/inquiry" element={<CustomerInquiry />} />
        <Route path="/school-register" element={<SchoolRegister />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/edit-schoolUser" element={<EditSchoolUser />} />
        <Route path="/edit-companyUser" element={<EditCompanyUser />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
