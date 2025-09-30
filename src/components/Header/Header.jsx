import React from "react";
import "./Header.css"
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle shadow-sm">
      <div className="container">
        {/* Logo + Brand */}
        <a className="navbar-brand fw-bold d-flex align-items-center  text-primary" href="#">
          <img
            src="/vite.svg" 
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
            alt="SmileCare Logo"
          />
          SmileCare
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Giới thiệu</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bác sĩ</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Dịch vụ</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bảng giá</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Đánh giá</a></li>
            <li className="nav-item">
            </li>
              <a className="btn btn-primary ms-2" href="#book">Đặt lịch hẹn</a>
              <a className="btn btn-primary ms-2" href="#dangnhap">Đăng nhập</a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
