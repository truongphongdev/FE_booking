import React from "react";
import logo from "../../assets/images/logo4.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-info-subtle shadow-sm fixed-top"
      style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }} // Giảm padding
    >
      <div className="container">
        {/* Logo to, cân chỉnh padding */}
        <Link to="/" className="navbar-brand d-flex align-items-center py-0">
          <img
            src={logo}
            alt="SmileCare Logo"
            style={{ height: "70px", width: "auto" }}
          />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold text-primary">Trang chủ</Link>
            </li>
            <li className="nav-item"><Link to="/about" className="nav-link" >Về chúng tôi</Link></li>
            <li className="nav-item"><Link to="/doctor" className="nav-link" >Bác sĩ</Link></li>
            <li className="nav-item"><Link to= "/service" className="nav-link" >Dịch vụ</Link></li>
            <li className="nav-item"><Link to = "/price" className="nav-link" >Bảng giá</Link></li>
            <li className="nav-item"><Link to ="/feedback" className="nav-link" >Đánh giá</Link></li>
            <li className="nav-item ms-2">
              <Link to="/booking" className="btn btn-primary">
                Đặt lịch hẹn
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link to="/account/login" className="btn btn-primary">
                Đăng nhập
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

