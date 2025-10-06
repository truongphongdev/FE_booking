import "./assets/App.css";
import LayoutLogin from "./pages/LayoutLogin/LayoutLogin";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import LayoutHome from "./pages/Home/LayoutHome";
import LayoutHero from "./pages/HeroPages/LayoutHero";
import ForgotPassword from "./pages/LayoutLogin/ForgotPassword";
import BookingForm from "./pages/Booking/BookingPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/account/*" element={<LayoutLogin />} />
        <Route path="/*" element={<LayoutHome />} />
        <Route path="/Hero" element={<LayoutHero />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
