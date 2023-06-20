import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import ContactNav from "./components/Common/ContactNav";
import PrimaryNav from "./components/Common/PrimaryNav";
import Footer from "./components/Common/Footer";
import CTA from "./components/Common/CTA";
import SecondaryNav from "./components/Common/SecondaryNav";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import "./style/App.css";
// import { client, gql } from "./apolloClient";

function App() {
  // (async () => {
  //   // const data = await fetch("http://localhost:4002", {
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   method: "POST",
  //   //   body: JSON.stringify({
  //   //     query: `
  //   //       query getCollection {
  //   //         name
  //   //         code
  //   //         uuid
  //   //         description
  //   //         collection_id
  //   //         updated_at
  //   //         created_at
  //   //       }
  //   //     `,
  //   //   }),
  //   // });

  //   const data = await client.query({
  //     query: gql`
  //       query listCollection {
  //         name
  //       }
  //     `,
  //   });
  //   console.log("collection", data);
  // })();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={
              <>
                <ContactNav />
                <PrimaryNav />
                <SecondaryNav />
                <AppContainer />
                <CTA />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
