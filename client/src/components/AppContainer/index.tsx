import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Contact from "../../components/Contact/ContactCards";

export default function AppContainer() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}
