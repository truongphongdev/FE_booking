import React from "react";

const ServiceCard = ({ title, desc }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">General & Cosmetic Dentistry</h2>
        <div className="row">
          <ServiceCard title="Dental Implants" desc="Durable, natural-looking tooth replacements." />
          <ServiceCard title="Teeth Whitening" desc="Brighten your smile with safe treatments." />
          <ServiceCard title="Smile Makeover" desc="Transform your smile to boost confidence." />
        </div>
      </div>
    </section>
  );
}
