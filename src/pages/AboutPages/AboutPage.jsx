import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AboutDetail from "../../components/About/AboutDetail/AboutDetail.jsx"
const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center bg-blue-50 py-10c ">
        <AboutDetail/>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
