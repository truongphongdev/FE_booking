import React from "react";

const Doctor = () => {
  const doctors = [
    {
      name: "BS. Nguyễn Văn A",
      specialty: "Chuyên khoa chỉnh nha",
      image: "/images/doctor1.jpg",
    },
    {
      name: "BS. Trần Thị B",
      specialty: "Chuyên khoa phục hình răng",
      image: "/images/doctor2.jpg",
    },
    {
      name: "BS. Lê Văn C",
      specialty: "Chuyên khoa cấy ghép Implant",
      image: "/images/doctor3.jpg",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Đội ngũ Bác sĩ</h2>
          <p className="text-muted">
            Các bác sĩ tận tâm, chuyên môn cao, luôn đồng hành cùng nụ cười khỏe mạnh của bạn.
          </p>
        </div>

        <div className="row g-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-lg h-100 text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text text-muted">{doctor.specialty}</p>
                  <a href="/dat-lich" className="btn btn-outline-primary">
                    Đặt lịch với {doctor.name.split(" ")[1]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
