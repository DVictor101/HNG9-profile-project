import Homepage from "./homepage";
import "./pages.scss";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./contactpage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
export default Pages;
