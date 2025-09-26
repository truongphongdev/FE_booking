import "./assets/App.css";
import LayoutLogin from "./pages/LayoutLogin/LayoutLogin";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import LayoutHome from "./pages/Home/LayoutHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/account/*" element={<LayoutLogin />} />
        <Route path="/*" element={<LayoutHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
