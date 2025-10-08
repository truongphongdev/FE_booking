import NotFound from "../NotFound";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../../components/AdminPage/AdminPage";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Admin;
