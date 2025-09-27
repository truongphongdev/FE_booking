import "./assets/App.css";
import LayoutLogin from "./pages/LayoutLogin/LayoutLogin";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import LayoutHome from "./pages/Home/LayoutHome";
import { ToastContainer, Bounce } from "react-toastify";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/account/*" element={<LayoutLogin />} />
        <Route path="/*" element={<LayoutHome />} />
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
