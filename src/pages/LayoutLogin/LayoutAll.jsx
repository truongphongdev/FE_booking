import React from "react";

const LayoutAll = ({ children }) => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left side */}
        <div
          className="col-md-7 d-flex flex-column justify-content-center align-items-start text-white p-5"
          style={{
            background: "linear-gradient(135deg, #00aaff 0%, #ffffff 100%)",
          }}
        >
          <h2 className="fw-bold display-4 mb-4">Welcome to SmileCare</h2>
          <p className="lead">
            Chăm sóc nụ cười trọn vẹn - Đặt lịch dễ dàng, dịch vụ nha khoa hiện
            đại, an toàn, tận tâm, mang lại tự tin và sức khỏe răng miệng
          </p>
        </div>
        {/* Right side */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center bg-white">
          <div className="w-75">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAll;
