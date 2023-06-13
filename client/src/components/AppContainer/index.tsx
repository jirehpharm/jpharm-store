import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";
import ProductDeatils from "../../pages/ProductDeatils";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details" element={<ProductDeatils />} />
      </Route>
    </Routes>
  );
}
