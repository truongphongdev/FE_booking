import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="lead text-muted mb-4">
        Xin lỗi, trang bạn tìm không tồn tại hoặc đã bị di chuyển.
      </p>
    </div>
  );
};

export default NotFound;
