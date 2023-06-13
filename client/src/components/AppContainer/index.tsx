import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";
import BreadcrumbBanner from "../Common/BreadcrumbBanner";
import ForgotPassword from "../../pages/ForgotPassword";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product-details"
          element={
            <>
              <BreadcrumbBanner
                title={"Antiseptic Spray"}
                bgImage={
                  "https://themexriver.com/wp/vicodin/wp-content/themes/vicodin/assets/images/bg/14.jpg"
                }
              />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
