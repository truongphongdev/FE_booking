import React from "react";
import anhnen from "./anhnen.avif";

export default function HeroSection() {
  return (
    <section
      className="d-flex align-items-center position-relative"
      style={{
        minHeight: "80vh",
        backgroundColor: "#ffffff", // nền trắng
        padding: "80px 0",
        overflow: "hidden",
        color: "#222222", // chữ đen xám
      }}
    >
      {/* Bỏ overlay mờ đi vì nền trắng rồi */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Text content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3" style={{ color: "#3ec9c9ff" }}>
              Nụ cười với sự tự tin<br />
              Sống với sự thoải mái
            </h1>
            <p className="lead mb-4" style={{ color: "#000000ff" }}>
              Trải nghiệm chăm sóc nha khoa chuyên nghiệp với công nghệ hiện đại
              và một môi trường thân thiện.
            </p>
            <div className="d-flex flex-wrap gap-3">
              
              <a
                href="#services"
                className="btn btn-primary btn-lg fw-semibold shadow"
              >
                Dịch vụ của chúng tôi
              </a>
            </div>
          </div>

          {/* Ảnh */}
          <div className="col-lg-6 text-center">
            <div className="p-3 bg-white rounded-4 shadow-lg d-inline-block">
              <img
                src={anhnen}
                alt="Nha sĩ"
                className="img-fluid rounded-4"
                style={{
                  maxHeight: "420px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
