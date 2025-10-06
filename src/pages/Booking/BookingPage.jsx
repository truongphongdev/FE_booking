import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Booking from "../../components/Booking/Booking.jsx";

const BookingPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center bg-blue-50 py-10">
        <Booking />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
