import React from "react";
import logo from "./logo4.png";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-info-subtle shadow-sm"
      style={{ paddingTop: "0.3rem", paddingBottom: "0.3rem" }} // Giảm padding
    >
      <div className="container">
        {/* Logo to, cân chỉnh padding */}
        <a className="navbar-brand d-flex align-items-center py-0" href="#">
          <img
            src={logo}
            alt="SmileCare Logo"
            style={{ height: "70px", width: "auto" }} // Tăng chiều cao logo
          />
        </a>

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
            <li className="nav-item"><a className="nav-link" href="#">Giới thiệu</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bác sĩ</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Dịch vụ</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bảng giá</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Đánh giá</a></li>
            <li className="nav-item ms-2">
              <a className="btn btn-primary" href="#book">Đặt lịch hẹn</a>
            </li>
            <li className="nav-item ms-2">
              <a className="btn btn-primary" href="#dangnhap">Đăng nhập</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
