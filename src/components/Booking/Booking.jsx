import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false); // để kiểm soát hiển thị

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // đổi trạng thái sang đã đặt lịch
  };

  // Nếu đã submit thì hiển thị trang xác nhận
  if (submitted) {
    return (
      <div className="container my-5">
        <div className="card shadow-lg p-4 mx-auto text-center" style={{ maxWidth: "600px" }}>
          <h2 className="text-success mb-3">🎉 Đặt lịch thành công!</h2>
          <p>Cảm ơn <strong>{formData.name}</strong> đã đặt lịch.</p>
          <ul className="list-group text-start mb-3">
            <li className="list-group-item"><strong>📞 SĐT:</strong> {formData.phone}</li>
            <li className="list-group-item"><strong>📅 Ngày:</strong> {formData.date}</li>
            <li className="list-group-item"><strong>⏰ Giờ:</strong> {formData.time}</li>
            <li className="list-group-item"><strong>🦷 Dịch vụ:</strong> {formData.service}</li>
            {formData.note && (
              <li className="list-group-item"><strong>📝 Ghi chú:</strong> {formData.note}</li>
            )}
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => setSubmitted(false)}
          >
            Đặt lịch mới
          </button>
        </div>
      </div>
    );
  }

  // Form nhập thông tin
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center text-primary mb-4">Đặt lịch hẹn</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Ngày</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Giờ</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Dịch vụ</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="">-- Chọn dịch vụ --</option>
              <option value="Tẩy trắng răng">Tẩy trắng răng</option>
              <option value="Niềng răng">Niềng răng</option>
              <option value="Cạo vôi răng">Cạo vôi răng</option>
              <option value="Trám răng">Trám răng</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Ghi chú</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="3"
              className="form-control"
              placeholder="Ghi chú thêm (nếu có)..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Xác nhận đặt lịch
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
