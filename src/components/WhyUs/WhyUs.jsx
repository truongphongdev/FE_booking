// src/pages/WhyUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaCreditCard, FaHeadset, FaCheckCircle } from "react-icons/fa";

import anh1 from "../../assets/images/whyus1.jpg";
import anh2 from "../../assets/images/whyus2.jpg";
import anh3 from "../../assets/images/whyus3.jpg";
import beforeImg from "../../assets/images/before.png";
import afterImg from "../../assets/images/after.png";

const WhyUs = () => {
  return (
    <div className="background-section" style={{ paddingTop: "100px" }}>
      <div className="container py-5">

        {/* Tiêu đề */}
        <h1 className="text-center mb-4 text-primary fw-bold">
          🌟 Tại Sao Nên Chọn Chúng Tôi?
        </h1>
        <p className="lead text-center mb-5 text-muted">
          Chúng tôi không chỉ mang đến dịch vụ nha khoa chất lượng cao mà còn 
          cam kết đồng hành cùng bạn trong suốt quá trình chăm sóc sức khỏe răng miệng.
        </p>

        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={anh1} alt="Khám nhanh" style={{width:"550px"}}
              className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="text-primary"><FaClock className="me-2"/> Khám nhanh – Không chờ đợi</h3>
            <p>
              Với hệ thống đặt lịch thông minh, bạn không cần mất thời gian xếp hàng chờ đợi. 
              Mọi thủ tục đều được thực hiện nhanh chóng, giúp tiết kiệm tối đa thời gian cho khách hàng.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={anh2} alt="Trả góp"
              className="img-fluid rounded shadow" style={{width:"450px",height:"600px"}} />
          </div>
          <div className="col-md-6">
            <h3 className="text-success"><FaCreditCard className="me-2"/> Hỗ trợ trả góp 0%</h3>
            <p>
              Thanh toán dễ dàng và linh hoạt. Chúng tôi mang đến giải pháp tài chính nhẹ nhàng, 
              hỗ trợ trả góp 0% lãi suất để bạn yên tâm chăm sóc nụ cười của mình.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={anh3} alt="Hỗ trợ 24/7"
              className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h3 className="text-info"><FaHeadset className="me-2"/> Phục vụ 24/7 kể cả cuối tuần</h3>
            <p>
              Đội ngũ chăm sóc khách hàng luôn sẵn sàng lắng nghe và hỗ trợ, 
              ngay cả trong những tình huống khẩn cấp. Bạn hoàn toàn có thể yên tâm khi lựa chọn chúng tôi.
            </p>
          </div>
        </div>

        {/* Section 4 - Giá trị */}
        <div className="text-center mb-5">
          <h3>🌟 Những giá trị mà chúng tôi mang lại</h3>
            <ul className="list-unstyled d-inline-block text-start">
                <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Đội ngũ bác sĩ giàu kinh nghiệm
                </li>
                <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Trang thiết bị hiện đại, đạt chuẩn quốc tế
                </li>
                <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Dịch vụ thân thiện, chu đáo
                </li>
                <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Chính sách bảo hành rõ ràng, minh bạch
                </li>
            </ul>
        </div>

        {/* Feedback */}
        <div className="bg-light p-5 rounded shadow mb-5">
          <h3 className="text-center mb-4">✨ Khách hàng nói gì về chúng tôi?</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <p>"Dịch vụ nhanh chóng, bác sĩ rất tận tâm!"</p>
              <strong>- Lan, Hà Nội</strong>
            </div>
            <div className="col-md-4">
              <p>"Mình cực kỳ hài lòng, trả góp 0% rất tiện lợi."</p>
              <strong>- Minh, HCM</strong>
            </div>
            <div className="col-md-4">
              <p>"Lần đầu đi khám mà không phải chờ đợi, 10 điểm!"</p>
              <strong>- Thảo, Đà Nẵng</strong>
            </div>
          </div>
        </div>

        {/* Before & After */}
        <div className="row my-5 text-center">
          <h3 className="mb-4" style={{color:"#0a9fc9ff"}}>Kết quả thực tế</h3>
          <div className="col-md-6">
            <img src={beforeImg} className="img-fluid rounded shadow" style={{margin: " 0 auto"}} alt="Trước"/>
            <p className="mt-2 text-success fw-bold">Trước điều trị</p>
          </div>
          <div className="col-md-6">
            <img src={afterImg} className="img-fluid rounded shadow" style={{margin: " 0 auto"}}  alt="Sau"/>
            <p className="mt-2 text-success fw-bold">Sau điều trị – Nụ cười rạng rỡ 🌟</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-5">
          <Link
            to="/booking"
            className="btn btn-lg btn-success px-5 py-3 shadow-lg"
            style={{
              fontSize: "1.5rem",
              borderRadius: "50px",
              background: "linear-gradient(90deg,#00c6ff,#0072ff)"
            }}
          >
            🚀 Đặt lịch ngay hôm nay
          </Link>
          <p className="mt-3 text-danger fw-bold">
            🔥 Ưu đãi miễn phí khám lần đầu cho 20 khách hàng đầu tiên!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
