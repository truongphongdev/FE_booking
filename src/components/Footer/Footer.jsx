import React from "react";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-light">
      <div className="container row">
        <div className="col-md-3">
          <h5>Patient Info</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-light">About Us</a></li>
            <li><a href="#" className="text-decoration-none text-light">History</a></li>
            <li><a href="#" className="text-decoration-none text-light">Testimonials</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Services</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-light">Preventive Care</a></li>
            <li><a href="#" className="text-decoration-none text-light">Implants</a></li>
            <li><a href="#" className="text-decoration-none text-light">Cosmetic Braces</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Contact</h5>
          <p>100 West Street, New York, NY</p>
          <p>Phone: 212-000-2299</p>
          <p>Email: info@dentapro.com</p>
        </div>
        <div className="col-md-3">
          <h5>Subscribe</h5>
          <form>
            <input type="email" className="form-control mb-2" placeholder="Your Email" />
            <button className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
      <p className="text-center mt-4 mb-0">&copy; 2025 DentalCA. All rights reserved.</p>
    </footer>
  );
}
