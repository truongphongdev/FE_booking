import React from "react";
import anhnen from "./anhnen.avif"

export default function Hero() {
  return (
    <section
      className=" bg-light"
      style={{
        backgroundImage: `url(${anhnen})`,
        backgroundSize: "cover",      // ảnh phủ kín
        backgroundPosition: "center", // canh giữa
        backgroundRepeat: "no-repeat", // không lặp
        minHeight: "60vh"
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        <div className="text-center text-lg-start pe-lg-5 text-white">
          <h1 className="display-4 fw-bold">
            Nụ cười với sự tự tin.<br />Sống với sự thoải mái.
          </h1>
          <p className="lead">
            Trải nghiệm chăm sóc nha khoa chuyên nghiệp với công nghệ hiện đại
            và một môi trường thân thiện.
          </p>
          <a href="#book" className="btn btn-primary btn-lg me-2">Book an Appointment</a>
          <a href="#services" className="btn btn-outline-secondary btn-lg">Our Services</a>
        </div>
      </div>
    </section>
  );
}

