import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Vui lòng nhập email của bạn.");
    } else {
      // Giả lập gửi email khôi phục mật khẩu
      setMessage("Email khôi phục mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư của bạn!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="row">
          {/* Bên trái - giới thiệu */}
          <div
            className="col-md-6 d-flex flex-column justify-content-center text-white p-5"
            style={{
              background: "linear-gradient(135deg, #3ec9c9 0%, #66d9ff 100%)",
              borderRadius: "20px 0 0 20px",
            }}
          >
            <h1 className="fw-bold mb-3">Forgot Password?</h1>
            <p>
              Nhập địa chỉ email của bạn để nhận liên kết khôi phục mật khẩu.  
              Chúng tôi sẽ giúp bạn truy cập lại tài khoản nhanh nhất.
            </p>
          </div>

          {/* Bên phải - form */}
          <div
            className="col-md-6 bg-white p-5 d-flex flex-column justify-content-center"
            style={{ borderRadius: "0 20px 20px 0", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
          >
            <h3 className="text-center mb-4" style={{ color: "#3ec9c9" }}>
              RESET PASSWORD
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {message && (
                <div
                  className="alert alert-info py-2 text-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100 mt-2"
                style={{
                  background: "linear-gradient(90deg, #3ec9c9 0%, #66d9ff 100%)",
                  border: "none",
                }}
              >
                GỬI LIÊN KẾT KHÔI PHỤC
              </button>
            </form>

            <hr className="my-4" />

            <div className="text-center">
              <Link to="/account/login" className="text-decoration-none" style={{ color: "#3ec9c9" }}>
                Quay lại đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
