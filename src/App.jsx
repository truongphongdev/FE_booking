import "./assets/App.css";
import LayoutLogin from "./pages/LayoutLogin/LayoutLogin";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import LayoutHome from "./pages/Home/LayoutHome";
import ForgotPassword from "./pages/LayoutLogin/ForgotPassword";
import BookingForm from "./pages/BookingPages/LayoutBooking"
import DoctorPage from "./pages/DoctorPages/LayoutDoctor"
import { ToastContainer, Bounce } from "react-toastify";
import Admin from "./pages/Admin/Admin";
import UserPage from "./pages/UserPage/UserPage";
import AboutDetail from "./pages/AboutPages/AboutPage"
import ServicePage from "./pages/ServicePages/LayoutService";
import ScrollToTop from "./components/ScrollToTop";
import PricePage  from "./pages/PricePages/LayoutPrice";
import FeedbackPage from "./pages/FeedbackPages/LayoutFeedback";
import WhyUsPage from "./pages/WhyUsPages/LayoutWhyUs";
function App() {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="/*" element={<LayoutHome />} />
          <Route path="/about" element={<AboutDetail />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/doctor" element ={<DoctorPage/>}/>
          <Route path="/service" element ={<ServicePage/>}/>
          <Route path="/price" element ={<PricePage/>}/>
          <Route path="/feedback" element ={<FeedbackPage/>}/>
          <Route path="/whyus" element ={<WhyUsPage/>}/>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/account" element={<UserPage />} />
          <Route path="/account/*" element={<LayoutLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
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
