import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Doctor from "../../components/Doctor/Doctor.jsx"

const DoctorPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center bg-blue-50 py-10c ">
        <Doctor/>
      </main>
      <Footer />
    </>
  );
};

export default DoctorPage;
