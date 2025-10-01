import React from "react";
import anha from "./implant-nha-khoa.jpg"
export default function Booking() {
  return (
    <section className="py-5 bg-primary bg-gradient text-white" id="booking">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Ảnh minh họa bên trái */}
          <div className="col-lg-6">
            <img
              src={anha}
              alt="Đặt lịch khám"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Biểu mẫu đặt lịch */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-white">Đặt Lịch Khám Ngay</h2>
            <p className="mb-4">
              Điền thông tin để chúng tôi liên hệ và sắp xếp lịch khám phù hợp nhất cho bạn.
            </p>

            <form className="bg-white text-dark rounded-4 p-4 shadow">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Họ và tên</label>
                <input type="text" className="form-control" id="name" placeholder="Nguyễn Văn A" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">Số điện thoại</label>
                <input type="tel" className="form-control" id="phone" placeholder="0123 456 789" />
              </div>

              <div className="mb-3">
                <label htmlFor="service" className="form-label fw-semibold">Dịch vụ quan tâm</label>
                <select className="form-select" id="service">
                  <option>Tẩy trắng răng</option>
                  <option>Niềng răng</option>
                  <option>Trồng răng Implant</option>
                  <option>Khám tổng quát</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label fw-semibold">Chọn ngày</label>
                <input type="date" className="form-control" id="date" />
              </div>

              <div className="mb-3">
                <label htmlFor="note" className="form-label fw-semibold">Ghi chú (nếu có)</label>
                <textarea className="form-control" id="note" rows="3" placeholder="Thời gian rảnh, yêu cầu riêng..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Gửi Yêu Cầu Đặt Lịch
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}