import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import NotFound from "../NotFound";

const LayoutHome = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default LayoutHome;
