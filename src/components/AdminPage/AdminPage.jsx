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
      <div className="bg-light border-end p-3 col-md-2">
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
        />
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <Link
              to="/admin/dashboard"
              className="nav-link text-dark fw-semibold"
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/users" className="nav-link text-dark">
              Quản lý người dùng
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/appointments" className="nav-link text-dark">
              Quản lý lịch hẹn
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/services" className="nav-link text-dark">
              Quản lý dịch vụ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/reports" className="nav-link text-dark">
              Báo cáo & Thống kê
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/settings" className="nav-link text-dark">
              Cài đặt
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column col-md-10">
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <div className="d-flex align-items-center gap-4">
            <Link
              to="/"
              className="text-decoration-none text-secondary fw-semibold"
            >
              <i className="bi bi-house-door me-1"></i>
              Về trang chủ
            </Link>
          </div>

          {/* Bên phải: Nút logout */}
          <button
            className="btn btn-primary btn-sm d-flex align-items-center gap-2"
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
