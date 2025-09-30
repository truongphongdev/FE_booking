import React from "react";
import Dr_David_Lee from "./Dr_David_Lee.jpg";
import Dr_Amanda_Reed from "./Dr_Amanda_Reed.jpg"
import Dr_Emily_Clark from "./Dr_Emily_Clark.jpg"
const TeamMember = ({ img, name, role }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 text-center shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{role}</p>
      </div>
    </div>
  </div>
);

export default function Team() {
  const members = [
    { img:Dr_Amanda_Reed, name: "Dr. Amanda Reed", role: "Orthodontist" },
    { img: Dr_David_Lee, name: "Dr. David Lee", role: "Cosmetic Dentist" },
    { img: Dr_Emily_Clark, name: "Dr. Emily Clark", role: "General Dentist" },
  ];

  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Passionate Team</h2>
        <div className="row">
          {members.map((m) => <TeamMember key={m.name} {...m} />)}
        </div>
      </div>
    </section>
  );
}
