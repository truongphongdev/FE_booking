import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
      navigate("/account/login");
    }
  };

  return (
    <div className="d-flex vh-100 ">
      {/* Sidebar */}
      <div
        className="bg-primary border-end p-3 col-md-2"
        style={{
          background: "linear-gradient(135deg,  #ffffff 0%, #75ccf7ff 100%)",
          border: "none",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            cursor: "pointer",
            width: "150px",
            height: "150px",
            margin: "0 auto",
          }}
          onClick={() => window.location.reload()}
          className="d-block mb-4 mx-auto rounded-circle shadow-sm"
        />
        <ul className="nav flex-column gap-2">
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/dashboard" className="nav-link text-dark ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/users" className="nav-link text-dark">
              Quản lý người dùng
            </Link>
          </li>
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/appointments" className="nav-link text-dark">
              Quản lý lịch hẹn
            </Link>
          </li>
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/services" className="nav-link text-dark">
              Quản lý dịch vụ
            </Link>
          </li>
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/reports" className="nav-link text-dark">
              Báo cáo & Thống kê
            </Link>
          </li>
          <li className="nav-item shadow-sm rounded-3">
            <Link to="/admin/settings" className="nav-link text-dark">
              Cài đặt
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column col-md-10">
        {/* Header */}
        <header
          className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm"
          style={{
            background: "linear-gradient(90deg,  #60c7faff 0%,  #ffffff 100%)",
            border: "none",
          }}
        >
          <div className="mx-3 d-flex align-items-center gap-4">
            <Link to="/" className="text-decoration-none text-dark ">
              <i className="bi bi-house-door me-1"></i>
              Về trang chủ
            </Link>
          </div>

          {/* Nút logout */}
          <button
            className="btn btn-outline-info btn-sm d-flex align-items-center gap-2 text-dark"
            onClick={handleLogout}
          >
            <i className="bi bi-person-circle"></i>
            Đăng xuất
          </button>
        </header>

        {/* Content area */}
        <main className="p-4">
          <h5 className="fw-bold mb-3">Dashboard</h5>
          <p>
            Chào mừng bạn đến với trang quản trị hệ thống đặt lịch khám bệnh.
          </p>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
