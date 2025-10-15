import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import NotFound from "../NotFound";

const ChildrenHome = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default LayoutHome;
