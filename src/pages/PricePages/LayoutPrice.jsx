import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Price from "../../components/Price/Price.jsx";

const PricePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center bg-blue-50 py-10c ">
        <Price/>
      </main>
      <Footer />
    </>
  );
};

export default PricePage;
