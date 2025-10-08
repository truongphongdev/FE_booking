import React from "react";
import anhNhaSi from "../../assets/images/anhnhasi.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="py-5 position-relative bg-light">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* IMAGE BLOCK */}
          <div className="col-lg-6 position-relative">
            <div className="about-img-wrapper position-relative">
              <img
                src={anhNhaSi}
                className="img-fluid rounded-4 shadow-lg"
                alt="Phòng khám nha khoa"
              />

              {/* Badge nổi bật */}
              <div className="position-absolute top-0 start-0 translate-middle badge bg-primary text-white rounded-pill px-4 py-2 shadow">
                10+ năm kinh nghiệm
              </div>

              {/* Box nổi ở góc */}
              <div
                className="position-absolute bottom-0 end-0 bg-white rounded p-3 shadow"
                style={{ transform: "translate(20%, 20%)", maxWidth: "220px" }}
              >
                <h6 className="fw-bold mb-1 text-primary">5000+ KH Hài Lòng</h6>
                <p className="mb-0 small text-muted">
                  Chăm sóc tận tâm – dịch vụ chu đáo
                </p>
              </div>
            </div>
          </div>

          {/* TEXT BLOCK */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Về Chúng Tôi</h2>
            <p className="text-muted">
              Phòng khám nha khoa hiện đại – nơi bạn được chăm sóc với trang thiết bị tiên tiến, không gian thân thiện và đội ngũ bác sĩ hàng đầu.
            </p>

            <div className="row mt-4">
              <div className="col-6 mb-3">
                <i className="bi bi-shield-check text-primary fs-2 mb-2"></i>
                <h6 className="fw-semibold">Đảm bảo vô trùng</h6>
                <p className="small text-muted">Tuân thủ tiêu chuẩn y tế nghiêm ngặt.</p>
              </div>
              <div className="col-6 mb-3">
                <i className="bi bi-award text-primary fs-2 mb-2"></i>
                <h6 className="fw-semibold">Bác sĩ giàu kinh nghiệm</h6>
                <p className="small text-muted">Hơn 10 năm trong ngành, tận tâm & chuyên môn cao.</p>
              </div>
              <div className="col-6 mb-3">
                <i className="bi bi-emoji-smile text-primary fs-2 mb-2"></i>
                <h6 className="fw-semibold">Dịch vụ nhẹ nhàng</h6>
                <p className="small text-muted">Cam kết trải nghiệm khám không đau.</p>
              </div>
              <div className="col-6 mb-3">
                <i className="bi bi-house-heart text-primary fs-2 mb-2"></i>
                <h6 className="fw-semibold">Không gian thư giãn</h6>
                <p className="small text-muted">Thiết kế thân thiện, thoải mái như ở nhà.</p>
              </div>
            </div>

            <Link to ="/about" className="btn btn-primary mt-3 px-4">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}