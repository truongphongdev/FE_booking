import "./assets/App.css";
import LayoutLogin from "./pages/LayoutLogin/LayoutLogin";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import LayoutHome from "./pages/Home/LayoutHome";
import LayoutHero from "./pages/HeroPages/LayoutHero";
import ForgotPassword from "./pages/LayoutLogin/ForgotPassword";
import BookingForm from "./pages/BookingPages/LayoutBooking"
import DoctorPage from "./pages/DoctorPages/LayoutDoctor"
import { ToastContainer, Bounce } from "react-toastify";
import Admin from "./pages/Admin/Admin";
import UserPage from "./pages/UserPage/UserPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/account/*" element={<LayoutLogin />} />
        <Route path="/*" element={<LayoutHome />} />
        <Route path="/hero" element={<LayoutHero />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/doctor" element ={<DoctorPage/>}/>
        <Route path="/account" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
