import React from "react";
import anhNhaSi from "../../assets/images/anhnhasi.png";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container row align-items-center">
        <div className="col-lg-6 mb-4">
          <img src={anhNhaSi} alt="Clinic" className="img-fluid rounded shadow" />
        </div>
        <div className="col-lg-6">
          <h2>Our Dental Clinic</h2>
          <p>We provide top-notch dental services in a comfortable and relaxing environment.</p>
          <ul className="list-group mb-3">
            <li className="list-group-item">10+ Years of Excellence</li>
            <li className="list-group-item">5000+ Satisfied Patients</li>
            <li className="list-group-item">24/7 Emergency Support</li>
          </ul>
          <a href="#book" className="btn btn-primary me-2">Book Appointment</a>
          <a href="#" className="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}
